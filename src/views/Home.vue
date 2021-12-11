<template>
  <Header />
  <main class="main-content">
    <Catalog />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import Catalog from "@/components/organisms/Catalog.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
    Catalog,
  },
});
</script>

<style lang="scss" scoped>
.main-content {
  flex-grow: 1;
}
</style>
