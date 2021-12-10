<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :id="name"
    :name="name"
    :value="modelValue"
    @input="handleInputChange"
    class="input"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  components: {},
  props: {
    type: {
      type: String,
      require: false,
      default: "text",
    },
    placeholder: {
      type: String,
      require: false,
      default: "Enter your data",
    },
    modelValue: {
      type: String,
    },
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInputChange(event: InputEvent) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.input {
  width: 100%;
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
