<template>
  <footer class="footer">
    <Logo />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "../atoms/Logo.vue";
export default defineComponent({
  name: "Footer",
  components: { Logo },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.footer {
  padding: 24px;
  text-align: center;
  background: $bg-color-secondary;
}
</style>
