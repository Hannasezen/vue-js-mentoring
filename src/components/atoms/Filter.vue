<template>
  <div class="filter" tabindex="0" :class="{ active: filter === activeFilter }">
    {{ filter }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Filter",
  props: {
    filter: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
    },
    activeFilter: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.filter {
  position: relative;
  display: inline-block;
  padding: 20px 0;
  border-bottom: 4px solid transparent;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  opacity: 0.8;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    background: $red;
    opacity: 0;
    transition: all ease 0.3s;
  }

  &:hover {
    opacity: 1;
  }
}

.filter:hover,
.filter.active {
  &:after {
    opacity: 1;
  }
}
</style>
