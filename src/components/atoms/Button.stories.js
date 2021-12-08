import Button from "./Button.vue";

export default {
  title: "App/Button",
  component: Button,
  argTypes: {
    name: "name",
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
  name: "Search",
};
