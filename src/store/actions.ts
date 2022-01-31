import { ActionContext, ActionTree } from "vuex";
import { State } from "./state";
import { MutationTypes, Mutations } from "./mutations";
import { Movie } from "../types/movies";
import { GetMoviesParams, getMovies } from "../services/api";

export enum ActionTypes {
  GET_MOVIES = "GET_MOVIES",
  ADD_MOVIE = "ADD_MOVIE",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.GET_MOVIES](
    { commit }: AugmentedActionContext,
    payload: GetMoviesParams
  ): void;
  [ActionTypes.ADD_MOVIE](
    { commit }: AugmentedActionContext,
    payload: Movie
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_MOVIES]({ commit }, params: GetMoviesParams) {
    const movies = await getMovies(params);
    if (movies) {
      commit(MutationTypes.GET_MOVIES, movies);
      return movies;
    }
  },
  [ActionTypes.ADD_MOVIE]({ commit }, movie: Movie) {
    commit(MutationTypes.ADD_MOVIE, movie);
  },
};
