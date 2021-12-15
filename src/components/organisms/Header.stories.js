import Header from "./Header.vue";

export default {
  title: "App/Organisms/Header",
  component: Header,
};

const Template = () => ({
  components: { Header },
  template: "<Header />",
});

export const HomeHeader = Template.bind({});
