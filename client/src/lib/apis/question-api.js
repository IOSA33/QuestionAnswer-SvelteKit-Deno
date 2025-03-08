import { PUBLIC_API_URL } from "$env/static/public";


const readQuestions = async () => {
  const response = await fetch(`${PUBLIC_API_URL}/courses/1/questions`);
  return await response.json();
};


const createQuestion = async (title, text) => {
  const data = { title, text };

  const response = await fetch(`${PUBLIC_API_URL}/courses/1/questions`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  return await response.json();
};


const upvoteQuestion = async (qId) => {
  const response = await fetch(`${PUBLIC_API_URL}/courses/1/questions/${qId}/upvote`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return await response.json();
};


const deleteQuestion = async (qId) => {
  const response = await fetch(`${PUBLIC_API_URL}/courses/1/questions/${qId}`, {
    method: "DELETE",
  });
  return await response.json();
};

export { createQuestion, deleteQuestion, readQuestions, upvoteQuestion };