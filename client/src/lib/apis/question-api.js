import { PUBLIC_API_URL } from "$env/static/public";


const readQuestions = async (courseId) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}/questions`);
  return await response.json();
};


const createQuestion = async (courseId, title, text) => {
  const data = { title, text };

  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}/questions`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  return await response.json();
};


const upvoteQuestion = async (courseId, qId) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}/questions/${qId}/upvote`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return await response.json();
};


const deleteQuestion = async (courseId, qId) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}/questions/${qId}`, {
    method: "DELETE",
  });
  return await response.json();
};

export { createQuestion, deleteQuestion, readQuestions, upvoteQuestion };