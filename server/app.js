import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";

const app = new Hono();
app.use("/*", cors());


let questions = [];




app.get("/courses", (c) => c.json({ 
  courses: [
    {"id": 1, "name": "Web Software Development" }, 
    {"id": 2, "name": "Device-Agnostic Design" }
  ]}
));


app.get("/courses/:id", (c) => {
  const id = Number(c.req.param("id"));
  return c.json({ course: { id, name: "Course Name" } });
});


app.post("/courses", async (c) => {
  const { name } = await c.req.json();
  return c.json({ course: { id: 3, name } });
});




app.get("/courses/:id/questions", async (c) => {
  return c.json(questions);
});


app.post("/courses/:id/questions", async (c) => {
  const { title, text } = await c.req.json();
  const newQuestion = { id: questions.length + 1, title: title, text: text, upvotes: 0 };
  questions.push(newQuestion);
  return c.json(newQuestion);
});


app.post("/courses/:id/questions/:qId/upvote", async (c) => {
  const qId = Number(c.req.param("qId"));
  const question = questions.find(q => q.id === qId);
  question.upvotes++;
  return c.json(question);
});


app.delete("/courses/:id/questions/:qId", (c) => {
  const qId = Number(c.req.param("qId"));
  const deletedQuestion = questions.find(q => q.id === qId);
  questions = questions.filter((d) => d.id !== qId);
  return c.json(deletedQuestion);
});


export default app;