<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 23 23"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.47099 1.15426L21.529 21.2122"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M21.529 1.15426L1.47103 21.2122"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CrossIcon",
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
      default: "23",
    },
    height: {
      type: String,
      default: "23",
    },
  },
});
</script>

<style></style>
