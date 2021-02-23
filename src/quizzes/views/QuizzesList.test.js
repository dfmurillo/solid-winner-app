import { shallowMount } from "@vue/test-utils";
import QuizzesList from "./QuizzesList.vue";

describe("QuizzesList View", () => {
  it("The component is mounted", () => {
    const wrapper = shallowMount(QuizzesList);
    expect(wrapper.text()).toContain("For this test, here are our quizzes:");
  });
});
