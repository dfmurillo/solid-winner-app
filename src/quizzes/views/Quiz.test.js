import Quiz from "./Quiz.vue";
import QuizSingle from "@/quizzes/components/QuizSingle.vue";
import { shallowMount } from "@vue/test-utils";

const mocks = {
  $route: {
    params: {
      quizId: 1
    }
  }
};

describe("Quiz View", () => {
  it("Given a valid quiz Id, when the component is mounted, then the view is rendered", () => {
    const wrapper = shallowMount(Quiz, { mocks });
    expect(wrapper.findComponent(QuizSingle)).toBeTruthy();
  });
});
