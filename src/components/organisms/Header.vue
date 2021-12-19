<template>
  <header class="header" :style="{ backgroundImage: `url('${heroImage}')` }">
    <div class="content">
      <div class="nav">
        <Logo />
        <AddFilmModal />
      </div>
      <div class="search">
        <Headline headline="Find your movie" level="1" class="h1" />
        <SearchForm />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import AddFilmModal from "../molecules/AddFilmModal.vue";
import Logo from "../atoms/Logo.vue";
import Headline from "../atoms/Headline.vue";
import SearchForm from "../molecules/SearchForm.vue";

export default defineComponent({
  name: "Header",
  components: {
    AddFilmModal,
    Logo,
    Headline,
    SearchForm,
  },
  data() {
    return {
      heroImage: "/images/hero-bg.jpg",
    };
  },
  methods: {
    showModal() {
      console.log("show modal");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.header {
  padding: 20px 20px 60px;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 1024px) {
    padding: 20px 60px;
  }
}

.content {
  @include container();
}

.nav {
  display: flex;
  justify-content: space-between;
  margin: 0 0 35px;
}

.search {
  margin: 0 0 60px;
  text-align: left;

  @media screen and (min-width: 1024px) {
    padding: 0 60px;
    margin: 0 0 150px;
  }
}
</style>
