import SearchForm from "./SearchForm.vue";

export default {
  title: "App/Molecules/SearchForm",
  component: SearchForm,
};

const Template = () => ({
  components: { SearchForm },
  template: "<SearchForm />",
});

export const FilmSearchForm = Template.bind({});
