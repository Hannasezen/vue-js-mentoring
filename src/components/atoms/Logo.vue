<template>
  <div class="logo">
    <a href="/" class="link">
      <span class="bold">netflix</span>
      <span>roulette</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logo",
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.logo {
  display: inline-block;
  font-family: $font-family;
  font-size: $font-size-m;
  line-height: $line-height-m;
  color: $logo-color;
  cursor: pointer;
}

.link {
  padding: 5px 5px 5px 0;
  text-decoration: none;
  color: inherit;
  transition: color ease 0.3s;

  &:hover {
    color: $font-color-secondary-hover;
  }
}

.bold {
  font-weight: 900;
}
</style>
