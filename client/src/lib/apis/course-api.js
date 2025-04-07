import { PUBLIC_API_URL } from "$env/static/public";


const readCourse = async () => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses`);
  return await response.json();
};


const readOneCourse = async (courseId) => {
    const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}`);
    return await response.json();
};


const createCourse = async (name) => {
  const data = { name};

  const response = await fetch(`${PUBLIC_API_URL}/api/courses`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  return await response.json();
};

export { readCourse, createCourse };