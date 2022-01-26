import { MutationTree } from "vuex";
import { State } from "./state";
import { Movie } from "../types/movies";

export const enum MutationTypes {
  GET_MOVIES = "GET_MOVIES",
  ADD_MOVIE = "ADD_MOVIE",
  REMOVE_MOVIE = "REMOVE_MOVIE",
  EDIT_MOVIE = "EDIT_MOVIE",
}

export type Mutations<S = State> = {
  [MutationTypes.GET_MOVIES](state: S, payload: Array<Movie>): void;
  [MutationTypes.ADD_MOVIE](state: S, payload: Movie): void;
  [MutationTypes.REMOVE_MOVIE](state: S, payload: number): void;
  [MutationTypes.EDIT_MOVIE](state: S, payload: Movie): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.GET_MOVIES](state, payload: Array<Movie>) {
    state.movies = payload;
  },
  [MutationTypes.ADD_MOVIE](state, payload: Movie) {
    state.movies.push(payload);
  },
  [MutationTypes.REMOVE_MOVIE](state, payload: number) {
    state.movies.filter((movie) => movie.id !== payload);
  },
  [MutationTypes.EDIT_MOVIE](state, payload: Movie) {
    let movie = state.movies.find((movie) => movie.id === payload.id);
    movie = { ...movie, ...payload };
  },
};
