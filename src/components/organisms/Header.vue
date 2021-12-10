<template>
  <header class="header" :style="{ backgroundImage: `url('${heroImage}')` }">
    <div class="content">
      <div class="nav">
        <Logo />
      </div>
      <div class="search">
        <Headline headline="FIND YOUR MOViE" />
        <SearchForm />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import Logo from "../atoms/Logo.vue";
import Headline from "../atoms/Headline.vue";
import SearchForm from "../molecules/SearchForm.vue";

export default defineComponent({
  name: "Header",
  components: {
    Logo,
    Headline,
    SearchForm,
  },
  data() {
    return {
      heroImage: "/images/hero-bg.jpg",
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 60px;
  background-position: center;
  background-size: cover;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
}

.nav {
  display: flex;
  justify-content: space-between;
  margin: 0 0 35px;
}

.search {
  padding: 0 60px;
  margin: 0 0 150px;
}
</style>
