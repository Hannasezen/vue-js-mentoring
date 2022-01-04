import { ActionContext, ActionTree } from "vuex";
import { State } from "./state";
import { MutationTypes, Mutations } from "./mutations";
import { Movie } from "../types/movies";

export enum ActionTypes {
  ADD_MOVIE = "ADD_MOVIE",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.ADD_MOVIE](
    { commit }: AugmentedActionContext,
    payload: Movie
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.ADD_MOVIE]({ commit }, movie: Movie) {
    commit(MutationTypes.ADD_MOVIE, movie);
  },
};
