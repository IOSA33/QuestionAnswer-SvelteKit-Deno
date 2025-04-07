import postgres from "postgres";

const sql = postgres();

const createCourse = async (name) => {
  const result = await sql`
    INSERT INTO courses (name)
    VALUES (${name})
    RETURNING *`;
  return result[0];
};

const readAllCourses = async () => {
  return await sql`SELECT * FROM courses`;
};

const readOneCourse = async (id) => {
  const result = await sql`SELECT * FROM courses WHERE id = ${id}`;
  return result[0];
};

const removeCourse = async (id) => {
  const result = await sql`DELETE FROM courses WHERE id = ${id} RETURNING *`;
  return result[0];
};

export { createCourse, readAllCourses, readOneCourse, removeCourse };