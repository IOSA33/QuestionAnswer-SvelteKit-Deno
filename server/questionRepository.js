import postgres from "postgres";

const sql = postgres();

const createQuestion = async (courseId, title, text) => {
  const result = await sql`
    INSERT INTO questions (course_id, title, text, upvotes)
    VALUES (${courseId}, ${title}, ${text}, 0)
    RETURNING *
  `;
  return result[0];
};

const readAllQuestions = async (courseId) => {
  return await sql`SELECT * FROM questions WHERE course_id = ${courseId}`;
};

const readOneQuestion = async (id) => {
  const result = await sql`SELECT * FROM questions WHERE id = ${id}`;
  return result[0];
};

const upvoteQuestion = async (id) => {
  const result = await sql`
    UPDATE questions
    SET upvotes = upvotes + 1
    WHERE id = ${id}
    RETURNING *
  `;
  return result[0];
};

const removeQuestion = async (id) => {
  const result = await sql`DELETE FROM questions WHERE id = ${id} RETURNING *`;
  return result[0];
};

export { createQuestion, readAllQuestions, readOneQuestion, upvoteQuestion, removeQuestion };