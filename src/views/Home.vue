<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/organisms/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style lang="scss" scoped>
.main-content {
  flex-grow: 1;
}
</style>
