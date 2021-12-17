<template>
  <div class="container">
    <div class="controls">
      <Filters
        :filters="filters"
        :click="filterFilms"
        :activeFilter="activeFilter"
      />
    </div>
    <div v-if="filmsCount" class="films-count">
      {{ filmsCount }} movies found
    </div>
    <div v-else class="no-films-count">No movies found</div>
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FilmCard from "../molecules/FilmCard.vue";
import Filters from "../molecules/Filters.vue";

const mock_data = [
  {
    title: "Pulp Fiction",
    description: "Action & Adventure",
    releaseDate: 2004,
    image: "/images/covers/pulp-fiction.png",
    genre: "crime",
  },
  {
    title: "Bohemian Rhapsody",
    description: "Drama, Biography, Music",
    releaseDate: 2003,
    image: "/images/covers/bohemian.png",
    genre: "documentary",
  },
  {
    title: "Kill Bill: Vol 2",
    description: "Oscar winning Movie",
    releaseDate: 1994,
    image: "/images/covers/kill-bill.png",
    genre: "horror",
  },
  {
    title: "Avengers: War of Infinity",
    description: "Action & Adventure",
    releaseDate: 2004,
    image: "/images/covers/avengers.png",
    genre: "comedy",
  },
  {
    title: "Inception",
    description: "Action & Adventure",
    releaseDate: 2003,
    image: "/images/covers/inception.png",
    genre: "comedy",
  },
  {
    title: "Reservoir dogs",
    description: "Oscar winning Movie",
    releaseDate: 1994,
    image: "/images/covers/dogs.png",
    genre: "horror",
  },
];

export default defineComponent({
  name: "Catalog",
  components: { FilmCard, Filters },
  data() {
    return {
      filters: ["all", "documentary", "comedy", "horror", "crime", "drama"],
      films: mock_data,
      activeFilter: "all",
    };
  },
  computed: {
    filmsCount() {
      return this.films?.length;
    },
  },
  methods: {
    filterFilms(genre = "all") {
      this.films = mock_data;
      this.activeFilter = "all";

      if (genre !== "all") {
        this.films = this.films.filter((film) => film.genre === genre);
        this.activeFilter = genre;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.container {
  @include container();
  padding: 0 20px 70px;

  &::before {
    content: "";
    position: relative;
    left: -20px;
    right: -20px;
    width: calc(100% + 40px);
    height: 10px;
    background: #888888;
    opacity: 0.5;
    display: block;
  }
}

.controls {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  border-bottom: 2px solid $dark-grey;

  &::after {
    content: "";
    position: absolute;
    left: 0.5px;
    right: 0.5px;
    bottom: -4px;
    height: 1px;
    background: $black-shadow;
  }
}

.films-count {
  margin: 0 0 28px;
  text-align: left;
  font-size: $font-size-m;
  line-height: $line-height-m;
}

.catalog {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 50px;
  text-align: center;

  @media screen and (min-width: 425px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 54px;
  }
}
</style>
