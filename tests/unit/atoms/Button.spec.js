import { shallowMount } from "@vue/test-utils";
import Button from "@/components/atoms/Button.vue";

describe("Button.vue", () => {
  let defaultProps;
  let mockOnClickFunction;

  beforeEach(() => {
    mockOnClickFunction = jest.fn();

    defaultProps = {
      name: "Button",
      buttonType: "primary",
      type: "submit",
      onClick: mockOnClickFunction,
    };
  });

  it("renders properly", () => {
    const wrapper = shallowMount(Button, {
      props: defaultProps,
    });

    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  it("calls onClick() when button clicked", async () => {
    const wrapper = shallowMount(Button, {
      props: defaultProps,
    });

    await wrapper.trigger("click");

    expect(mockOnClickFunction).toBeCalledTimes(1);
  });
});
