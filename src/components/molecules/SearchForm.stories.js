import SearchForm from "./SearchForm.vue";

export default {
  title: "App/Molecules/SearchForm",
  component: SearchForm,
  argTypes: {
    type: "name",
    placeholder: "placeholder",
  },
};

const Template = (args) => ({
  components: { SearchForm },
  setup() {
    return { args };
  },
  template: '<SearchForm v-bind="args" />',
});

export const FilmSearchForm = Template.bind({});
FilmSearchForm.args = {
  type: "text",
  placeholder: "What do you want to watch?",
};
