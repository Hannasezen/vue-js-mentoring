<template>
  <main class="main-content"></main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/organisms/Footer.vue";

export default defineComponent({
  components: {
    Footer,
  },
});
</script>

<style lang="scss" scoped>
.main-content {
  flex-grow: 1;
}
</style>
