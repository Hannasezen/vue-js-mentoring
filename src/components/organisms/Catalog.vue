<template>
  <footer class="footer">
    <FilmCard
      description="Action  Adventure"
      image="/images/covers/pulp-fiction.png"
      title="Pulp Fiction"
      :releaseDate="1994"
    />
  </footer>
</template>

<script>
import { defineComponent } from "vue";
import FilmCard from "../molecules/FilmCard.vue";

export default defineComponent({
  name: "Catalog",
  components: { FilmCard },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.catalog {
  padding: 24px;
  text-align: center;
  background: $bg-color-secondary;
}
</style>
