import { browser } from "$app/environment";
import { PUBLIC_API_URL, PUBLIC_INTERNAL_API_URL } from "$env/static/public";
const BASE_URL = browser ? PUBLIC_API_URL : PUBLIC_INTERNAL_API_URL;

export async function load({ params, fetch }) {
  const courseResponse = await fetch(`${BASE_URL}/api/courses/${params.id}`);
  const course = await courseResponse.json();

  const questionsResponse = await fetch(`${BASE_URL}/api/courses/${params.id}/questions`);
  const questions = await questionsResponse.json();

  return {
    course,
    questions,
  };
}