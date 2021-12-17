<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 29 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="18.5" cy="10.5" r="9.5" :stroke="stroke" stroke-width="2" />
    <path
      d="M10.5 19.5L1.5 28.5"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="square"
    />
  </svg>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchIcon",
  props: {
    fill: {
      type: String,
      default: "",
    },
    stroke: {
      type: String,
      default: "#fff",
    },
    width: {
      type: String,
      default: "29",
    },
    height: {
      type: String,
      default: "30",
    },
  },
});
</script>

<style></style>
