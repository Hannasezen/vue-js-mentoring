<template>
  <div class="catalog">
    <FilmCard
      v-for="film in films"
      :key="film.title"
      :title="film.title"
      :description="film.description"
      :image="film.image"
      :releaseDate="film.releaseDate"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FilmCard from "../molecules/FilmCard.vue";

export default defineComponent({
  name: "Catalog",
  components: { FilmCard },
  data() {
    return {
      films: [
        {
          title: "Pulp Fiction",
          description: "Action & Adventure",
          releaseDate: 2004,
          image: "/images/covers/pulp-fiction.png",
        },
        {
          title: "Bohemian Rhapsody",
          description: "Drama, Biography, Music",
          releaseDate: 2003,
          image: "/images/covers/bohemian.png",
        },
        {
          title: "Kill Bill: Vol 2",
          description: "Oscar winning Movie",
          releaseDate: 1994,
          image: "/images/covers/kill-bill.png",
        },
        {
          title: "Avengers: War of Infinity",
          description: "Action & Adventure",
          releaseDate: 2004,
          image: "/images/covers/avengers.png",
        },
        {
          title: "Inception",
          description: "Action & Adventure",
          releaseDate: 2003,
          image: "/images/covers/inception.png",
        },
        {
          title: "Reservoir dogs",
          description: "Oscar winning Movie",
          releaseDate: 1994,
          image: "/images/covers/dogs.png",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.catalog {
  @include container();
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 50px;
  padding: 24px;
  text-align: center;

  @media screen and (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 60px;
  }
}
</style>
