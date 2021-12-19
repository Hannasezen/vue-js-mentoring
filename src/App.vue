<template>
  <div class="app">
    <router-view />
    <main class="main-content">
      <Catalog />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Catalog from "@/components/organisms/Catalog.vue";
import Footer from "@/components/organisms/Footer.vue";

export default defineComponent({
  components: {
    Catalog,
    Footer,
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.app {
  min-height: 100vh;
  font-family: $font-family;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: $font-color;
  font-size: $font-size-s;
  line-height: $line-height-s;
  background: $bg-color;

  a {
    @include link();
  }

  @media screen and (min-width: 768px) {
    font-size: $font-size-s;
    line-height: $line-height-s;
  }
}

.main-content {
  flex-grow: 1;

  &::before {
    content: "";
    position: relative;
    left: 0;
    right: 0;
    width: 100%;
    height: 10px;
    background: #888888;
    opacity: 0.5;
    display: block;
  }
}
</style>
