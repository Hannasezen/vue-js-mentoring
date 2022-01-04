import { GetterTree } from "vuex";
import { State } from "./state";
import { Movie } from "../types/movies";

export type Getters = {
  getMovies(state: State): Array<Movie>;
  getMovie(state: State): (title: string) => Movie | undefined;
  getFilteredMovies(state: State): (genre: string) => Array<Movie>;
};

export const getters: GetterTree<State, State> & Getters = {
  getMovies: (state) => {
    return state.movies;
  },
  getMovie: (state) => (title) => {
    return state.movies.find((movie: Movie) => movie.title === title);
  },
  getFilteredMovies: (state) => (genre) => {
    return genre === "all" || undefined
      ? state.movies
      : state.movies.filter((movie) => movie.genres?.includes(genre));
  },
};
