<template>
  <div class="container">
    <header class="header">
      <Logo />
      <Search :stroke="'#F65261'" />
    </header>
    <div class="film-details">
      <div class="image">
        <img source="title" :src="movie.poster_path" :alt="movie.title" />
      </div>
      <div class="content">
        <div class="title">
          <div class="name">
            {{ movie.title }}
            <span class="score">{{ score }}</span>
          </div>
          <div class="genre">{{ movieGenres }}</div>
        </div>

        <div class="numbers">
          <span class="date">{{ getYear(movie.release_date) }}</span>
          <span class="duration">{{ filmDuration }}</span>
        </div>
        <div class="description">{{ movie.overview }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "../store";
import Logo from "@/components/atoms/Logo.vue";
import Search from "@/components/icons/SearchIcon.vue";
import { Movie } from "@/types/movies";

export default defineComponent({
  name: "Details",
  components: { Logo, Search },
  data() {
    return {
      title: this.$route.params.title,
      movie: {
        id: 0,
        title: "",
        tagline: "",
        vote_average: 0,
        vote_count: 0,
        release_date: "",
        poster_path: "",
        overview: "",
        budget: 0,
        revenue: 0,
        genres: [""],
        runtime: 0,
      },
      store: useStore(key),
    };
  },
  computed: {
    filmDuration(): string {
      if (!this.movie?.runtime) return "";
      const hours = Math.trunc(this.movie?.runtime / 60);
      const minutes = this.movie?.runtime % 60;
      return `${hours}h${minutes ? ` ${minutes}min` : " 0min"}`;
    },
    movieGenres(): string {
      return this.movie?.genres?.join(" & ") || "";
    },
    score(): string {
      return this.movie.vote_average?.toFixed(1) || "0.0";
    },
  },
  methods: {
    getMovie(): void {
      const movie = this.store.getters.getMovie(this.title);
      if (movie) {
        this.movie = movie;
      }
    },
  },
  created() {
    this.getMovie();
  },
  updated() {
    this.title = `${this.$route.params.title}`;
    this.getMovie();
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.container {
  @include container();
  padding: 38px 20px 30px;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px;
}

.film-details {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}

.image {
  max-width: 323px;
  margin: 0 60px 0 0;
  flex-shrink: 0;

  img {
    display: block;
    max-width: 100%;
  }
}

.content {
  text-align: left;
}

.title {
  margin: 0 0 30px;
}

.name {
  display: flex;
  align-items: center;
  margin: 0 0 4px;
  font-size: $font-size-xl;
  line-height: $line-height-xl;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.score {
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 0 0 0 20px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 20px;
  line-height: 24px;
}

.genre {
  font-size: $font-size-xs;
  line-height: $line-height-xs;
  font-weight: 500;
  opacity: 0.5;
}

.numbers {
  margin: 0 0 30px;
  font-size: $font-size-l;
  line-height: $line-height-l;
  color: $red;
}

.date {
  margin: 0 50px 0 0;
}

.description {
  font-weight: 300;
  font-size: $font-size-m;
  line-height: $line-height-m;
  opacity: 0.5;
}
</style>
