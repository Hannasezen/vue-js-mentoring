import Headline from "./Headline.vue";

export default {
  title: "App/Atoms/Headline",
  component: Headline,
  argTypes: {
    headline: "headline",
  },
};

const Template = (args) => ({
  components: { Headline },
  setup() {
    return { args };
  },
  template: '<Headline v-bind="args" />',
});

export const Title = Template.bind({});
Title.args = {
  headline: "FIND your movie",
};
