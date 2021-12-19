import Headline from "./Headline.vue";

export default {
  title: "App/Atoms/Headline",
  component: Headline,
  argTypes: {
    headline: "headline",
    level: {
      options: [1, 2, 3, 4],
      control: { type: "select" },
    },
    class: {
      options: ["h1", "h2", "h3", "h4"],
      control: { type: "select" },
    },
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

export const h1 = Template.bind({});
h1.args = {
  headline: "FIND your movie",
  level: 1,
  class: "h1",
};

export const h2 = Template.bind({});
h2.args = {
  headline: "FIND your movie",
  level: 2,
  class: "h2",
};
