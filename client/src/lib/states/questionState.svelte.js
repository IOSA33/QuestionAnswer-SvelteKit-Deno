import { browser } from "$app/environment";
import * as questionApi from "$lib/apis/question-api.js";

let questionState = $state([]);

if (browser) {
  questionState = await questionApi.readQuestions();
}

const useQuestionState = () => {
  return {
    get questions() {
        return questionState;
    },

    add: async  (question) => {
        const newQuestion = await questionApi.createQuestion(question.title, question.text);
        questionState.push(newQuestion);
    },

    remove: async  (id) => {
      const removedQuestion = await questionApi.deleteQuestion(id);
        questionState = questionState.filter((q) => q.id !== removedQuestion.id);

    },

    upvote: async (id) => {
        const upvotedQuestion = await questionApi.upvoteQuestion(id);
        const question = questionState.find((q) => q.id === upvotedQuestion.id); 
        question.upvotes += 1;
      },
  };
};

export { useQuestionState };