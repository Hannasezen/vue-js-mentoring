import Button from "./Button.vue";

export default {
  title: "App/Atoms/Button",
  component: Button,
  argTypes: {
    name: "name",
    buttonType: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  name: "submit",
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "reset",
  buttonType: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  name: "+ add movie",
  buttonType: "tertiary",
};
