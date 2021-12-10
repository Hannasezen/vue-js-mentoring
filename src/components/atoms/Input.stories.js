import Input from "./Input.vue";

export default {
  title: "App/Atoms/Input",
  component: Input,
  argTypes: {
    type: "type",
    placeholder: "placeholder",
    name: "name",
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  placeholder: "What do you want to watch?",
  name: "film-search",
  modelValue: "Terminator 1",
};
