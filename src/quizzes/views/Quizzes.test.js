import { shallowMount } from "@vue/test-utils";
import Quizzes from "./Quizzes.vue";

describe("Quizzes View", () => {
  it("The component is mounted", () => {
    const wrapper = shallowMount(Quizzes);
    expect(wrapper.text()).toContain("For this test, here are our quizzes:");
  });
});
