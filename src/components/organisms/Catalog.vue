<template>
  <div class="container">
    <div class="controls">
      <Filters
        :filters="filters"
        :filterFilms="filterMovies"
        :activeFilter="activeFilter"
      />
    </div>
    <div v-if="moviesCount" class="films-count">
      {{ moviesCount }} movies found
    </div>
    <div v-else class="no-films-count">No movies found</div>
    <div class="catalog">
      <FilmCard
        v-for="movie in movies"
        :key="movie.title"
        :title="movie.title"
        :overview="movie.overview"
        :poster_path="movie.poster_path"
        :release_date="movie.release_date"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilmCard from "../molecules/FilmCard.vue";
import Filters from "../molecules/Filters.vue";
import movies from "../../../data/movies.json";

export default defineComponent({
  name: "Catalog",
  components: { FilmCard, Filters },
  data() {
    return {
      filters: [] as Array<string>,
      movies: movies,
      activeFilter: "all",
    };
  },
  computed: {
    moviesCount(): number {
      return this.movies?.length;
    },
  },
  methods: {
    filterMovies(genre = "all"): void {
      this.movies = movies;
      this.activeFilter = "all";

      if (genre !== "all") {
        this.movies = this.movies.filter((movie) =>
          movie.genres.includes(genre)
        );
        this.activeFilter = genre;
      }
    },
  },
  mounted() {
    const filters: Set<string> = new Set();
    movies.map((movie) => {
      movie.genres.map((genre) => {
        filters.add(genre);
      });
    });
    this.filters = ["all", ...filters];
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.container {
  @include container();
  padding: 0 20px 70px;
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
