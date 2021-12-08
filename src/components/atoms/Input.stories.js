import Input from "./Input.vue";

export default {
  title: "App/Atoms/Input",
  component: Input,
  argTypes: {
    type: "name",
    placeholder: "placeholder",
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  type: "text",
  placeholder: "What do you want to watch?",
};
