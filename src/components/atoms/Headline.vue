<template>
  <h1 :class="className">{{ headline }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Headline",
  props: {
    headline: {
      type: String,
    },
  },
  computed: {
    className() {
      return {
        title: true,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.title {
  margin: 0 0 38px;
  font-family: $font-family;
  font-size: $font-size-xl;
  line-height: $line-height-xl;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: $font-color;
}
</style>
