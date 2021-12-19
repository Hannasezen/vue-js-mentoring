<template>
  <component :is="tagName" :class="className">{{ headline }}</component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Headline",
  props: {
    headline: {
      type: String,
    },
    level: {
      type: String,
      default: "1",
    },
    class: {
      type: String,
      required: false,
    },
  },
  computed: {
    tagName() {
      return `h${this.$props.level}`;
    },
    className() {
      return {
        title: true,
        [`${this.$props.class}`]: this.$props.class,
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
  font-weight: 300;
  text-transform: uppercase;
  color: $font-color;
}

.h1 {
  font-size: $font-size-xl;
  line-height: $line-height-xl;
  letter-spacing: 1px;
}
</style>
