<template>
  <button :class="classes" type="button">{{ name }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    name: {
      type: String,
      required: true,
    },
    buttonType: {
      type: String as PropType<string>,
      validator: function (value: string): boolean {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
      default: "primary",
    },
  },
  computed: {
    classes(props) {
      return {
        button: true,
        [`button--${props.buttonType}`]: props.buttonType,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.button {
  padding: 14px;
  border-radius: 4px;
  border: 2px solid $button-bg-color;
  font-family: $font-family;
  font-size: $font-size-m;
  line-height: $line-height-m;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  color: $font-color;
  background: $button-bg-color;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background: $button-hover-bg-color;
    border-color: $button-hover-bg-color;
  }

  &--secondary {
    color: $font-color-secondary;
    background: transparent;

    &:hover {
      color: $font-color;
    }
  }

  &--tertiary {
    padding: 11px;
    border: none;
    font-weight: 600;
    color: $font-color-secondary;
    background: rgba(96, 96, 96, 0.68);

    &:hover {
      color: $font-color;
    }
  }
}
</style>
