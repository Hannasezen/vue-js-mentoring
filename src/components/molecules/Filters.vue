<template>
  <div class="filters">
    <Filter
      v-for="filter in filters"
      :key="filter"
      :filter="filter"
      :activeFilter="activeFilter"
      @click="() => filterFilms(filter)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Filter from "../atoms/Filter.vue";

export default defineComponent({
  name: "Filters",
  components: { Filter },
  props: {
    filters: {
      type: Array as PropType<string[]>,
      required: true,
    },
    filterFilms: {
      type: Function as PropType<(filter: string) => void>,
      default: (filter = "all"): void => undefined,
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

.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    margin: 0 15px;

    &:last-child {
      margin-right: 0;
    }

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
