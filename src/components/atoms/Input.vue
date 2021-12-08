<template>
  <input :type="type" :placeholder="placeholder" class="input" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  components: {},
  props: ["type", "placeholder"],
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.input {
  display: inline-block;
  width: auto;
  padding: 16px 20px;
  box-sizing: border-box;
  border: none;
  font-family: $font-family;
  font-size: $font-size-m;
  line-height: $line-height-m;
  font-weight: 400;
  color: $font-color;
  background: #323232;
  opacity: 0.7;

  &::placeholder {
    color: inherit;
    opacity: 0.3;
  }
}
</style>
