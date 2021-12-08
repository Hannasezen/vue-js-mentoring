<template>
  <button class="button" type="button">{{ name }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  components: {},
  props: ["name"],
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.button {
  padding: 16px;
  border-radius: 4px;
  border: none;
  font-family: $font-family;
  font-size: $font-size-m;
  line-height: $line-height-m;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  color: $font-color;
  background: $button-bg-color;
  cursor: pointer;
  transition: background ease 0.3s;

  &:hover {
    background: $button-hover-bg-color;
  }
}
</style>
