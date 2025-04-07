import { browser } from "$app/environment";
import * as questionApi from "$lib/apis/question-api.js";

let questionState = $state([]);


const loadQuestions = async (courseId) => {
    await questionApi.readQuestions(courseId).then((data) => {
        questionState = data;
    });
}


const useQuestionState = (courseId) => {
  if (browser && courseId) {
    loadQuestions(courseId);
  }

  return {
    get questions() {
        return questionState;
    },

    add: async  (question) => {
        const newQuestion = await questionApi.createQuestion(courseId,  question.title, question.text);
        questionState.push(newQuestion);
    },

    remove: async  (id) => {
      const removedQuestion = await questionApi.deleteQuestion(courseId, id);
        questionState = questionState.filter((q) => q.id !== removedQuestion.id);

    },

    upvote: async (id) => {
        const upvotedQuestion = await questionApi.upvoteQuestion(courseId, id);
        const question = questionState.find((q) => q.id === upvotedQuestion.id); 
        question.upvotes += 1;
      },
  };
};

export { useQuestionState };