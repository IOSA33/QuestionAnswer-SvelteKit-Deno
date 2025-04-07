import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { zValidator } from "zValidator";
import * as courseRepository from "./courseRepository.js";
import * as  questionRepository from "./questionRepository.js";
import { courseValidator, questionValidator } from "./validators.js";
import { hash, verify } from "jsr:@denorg/scrypt@4.4.4";
import { getCookie, setCookie } from "jsr:@hono/hono@4.6.5/cookie";
import * as jwt from "jsr:@hono/hono@4.6.5/jwt";

import postgres from "postgres";
const sql = postgres();

const COOKIE_KEY = "token";
const JWT_SECRET = "wsd-project-secret";

const app = new Hono();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.get("/api/courses", async (c) => {
  const courses = await courseRepository.readAllCourses();
  return c.json(courses);
});


app.get("/api/courses/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const course = await courseRepository.readOneCourse(id);
  return c.json(course);
});


app.post("/api/courses", zValidator("json", courseValidator), async (c) => {
  const { name } = c.req.valid("json");
  const course = await courseRepository.createCourse(name);
  return c.json(course);
});


app.delete("/api/courses/:id", async (c) => {
  const id = Number(c.req.param("id"));
  const course = await courseRepository.removeCourse(id);
  return c.json(course);
});


app.get("/api/courses/:id/questions", async (c) => {
  const courseId = Number(c.req.param("id"));
  const questions = await questionRepository.readAllQuestions(courseId);
  return c.json(questions);
});


app.post("/api/courses/:id/questions", zValidator("json", questionValidator), async (c) => {
  const courseId = Number(c.req.param("id"));
  const { title, text } = c.req.valid("json");
  const question = await questionRepository.createQuestion(courseId, title, text);
  return c.json(question);
});


app.post("/api/courses/:id/questions/:qId/upvote", async (c) => {
  const qId = Number(c.req.param("qId"));
  const question = await questionRepository.upvoteQuestion(qId);
  return c.json(question);
});


app.delete("/api/courses/:id/questions/:qId", async (c) => {
  const qId = Number(c.req.param("qId"));
  const question = await questionRepository.removeQuestion(qId);
  return c.json(question);
});








// new code step 10


app.get("/api/courses/:id/questions/:qId", async (c) => {
  const qId = Number(c.req.param("qId"));
  const question = await questionRepository.readOneQuestion(qId);
  return c.json(question);
});


app.get("/api/courses/:id/questions/:qId/answers", async (c) => {
  const qId = Number(c.req.param("qId"));
  const answers = await sql`SELECT id, upvotes, text, question_id FROM question_answers WHERE question_id = ${qId}`;
  return c.json(answers);
});

app.post("/api/courses/:id/questions/:qId/answers", async (c) => {
  const token = getCookie(c, COOKIE_KEY);
  if (!token) {
    c.status(401);
    return c.json({ "message": "Invalid token!" });
  }

  const decoded = await jwt.verify(token, JWT_SECRET);
  const userResult = await sql`SELECT id FROM users WHERE email = ${decoded.email}`;
  if (userResult.length === 0) {
    c.status(401);
    return c.json({ "message": "Invalid token!" });
  }

  const userId = userResult[0].id;
  const qId = Number(c.req.param("qId"));
  const { text } = await c.req.json();
  const result = await sql`INSERT INTO question_answers (question_id, user_id,  upvotes, text)
    VALUES (${qId}, ${userId}, 0, ${text}) RETURNING *`;

  return c.json(result[0]);
});


app.post("/api/courses/:id/questions/:qId/answers/:aId/upvote", async (c) => {
  const token = getCookie(c, COOKIE_KEY);
  if (!token) {
    c.status(401);
    return c.json({ "message": "Invalid token!" });
  }

  const aId = Number(c.req.param("aId"));
  const result = await sql`UPDATE question_answers SET upvotes = upvotes + 1 WHERE id = ${aId} RETURNING *`;

  return c.json(result[0]);
});


// new code step 10









app.post("/api/auth/register", async (c) => {
  const data = await c.req.json();

  const result = await sql`INSERT INTO users (email, password_hash)
    VALUES (${data.email.trim().toLowerCase()},
    ${hash(data.password.trim())}) RETURNING *`;
  return c.json({ "message": `Registered as user ${result[0].id}.` });
});


app.post("/api/auth/login", async (c) => {
  const data = await c.req.json();

  const result = await sql`SELECT * FROM users
    WHERE email = ${data.email.trim().toLowerCase()}`;

  if (result.length === 0) {
    return c.json({
      "message": "Incorrect email or password.",
    });
  }

  const user = result[0];

  const passwordValid = verify(data.password.trim(), user.password_hash);
  if (passwordValid) {

    const payload = {
      id: user.id,
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + (60*60*60),
    };
    const token = await jwt.sign(payload, JWT_SECRET);

    setCookie(c, COOKIE_KEY, token, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      sameSite: "lax"
    });
    return c.json({
      "message": `Welcome!`,
    });
  } else {
    return c.json({
      "message": "Incorrect email or password.",
    });
  }
});


app.post("/api/auth/verify", async (c) => {
  const token = getCookie(c, COOKIE_KEY);
  if (!token) {
    c.status(401);
    return c.json({
      "message": "No token found!",
    });
  }

  try {
    const payload = await jwt.verify(token, JWT_SECRET);
    payload.exp = Math.floor(Date.now() / 1000) + 60;

    const refreshedToken = await jwt.sign(payload, JWT_SECRET);

    setCookie(c, COOKIE_KEY, refreshedToken, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      sameSite: "lax",
    });

    return c.json({
      "message": "Valid token!",
    });
  } catch (e) {
    c.status(401);
    return c.json({
      "message": "Invalid token!",
    });
  }
});

const userMiddleware = async (c, next) => {
  const token = getCookie(c, COOKIE_KEY);
  const { payload } = jwt.decode(token, JWT_SECRET);
  c.user = payload;
  await next();
};



app.use(
  "/api/notes",
  jwt.jwt({
    cookie: COOKIE_KEY,
    secret: JWT_SECRET,
  }),
);

app.use("/api/notes", userMiddleware);

app.get("/api/notes", async (c) => {
  const notes = await sql`SELECT * FROM notes WHERE user_id = ${c.user.id}`;
  return c.json(notes);
});

app.post("/api/notes", async (c) => {
  const { text } = await c.req.json();
  const result = await sql`INSERT INTO notes (user_id, text)
    VALUES (${c.user.id}, ${text}) RETURNING *`;
  return c.json(result[0]);
});

app.use(
  "/api/notes/*",
  jwt.jwt({
    cookie: COOKIE_KEY,
    secret: JWT_SECRET,
  }),
);

app.use("/api/notes/*", userMiddleware);


app.get("/api/notes/:id", async (c) => {
  const notes = await sql`SELECT * FROM notes
    WHERE id = ${c.req.param("id")} AND user_id = ${c.user.id}`;
  if (notes.length <= 0) {
    c.status(404);
    return c.json({ error: "Note not found" });
  }
  return c.json(notes[0]);
});







export default app;