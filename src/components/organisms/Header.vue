<template>
  <header class="header" :style="{ backgroundImage: `url('${heroImage}')` }">
    <div class="content">
      <div class="nav">
        <Logo />
        <Button
          buttonType="tertiary"
          name="+ add movie"
          type="button"
          :onClick="showModal"
        />
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
import Button from "../atoms/Button.vue";
import Logo from "../atoms/Logo.vue";
import Headline from "../atoms/Headline.vue";
import SearchForm from "../molecules/SearchForm.vue";

export default defineComponent({
  name: "Header",
  components: {
    Button,
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
  padding: 20px 60px;
  background-position: center;
  background-size: cover;
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
  padding: 0 60px;
  margin: 0 0 150px;
  text-align: left;
}
</style>
