import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { State, state } from "./state";
import { getters } from "./getters";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  getters,
});
