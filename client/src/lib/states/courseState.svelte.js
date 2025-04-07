import { browser } from "$app/environment";
import * as courseApi from "$lib/apis/course-api.js";

let courseState = $state([]);

const loadQuestions = async () => {
  courseState = await courseApi.readCourse();
};



if (browser) {
  loadQuestions();
}

const useCourseState = () => {
  return {
    get courses() {
        return courseState;
    },

    add: async  (course) => {
        const newCourse = await courseApi.createCourse(course.name);
        courseState.push(newCourse);
    },
  };
};

export { useCourseState };