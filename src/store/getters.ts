import { Movie } from "../types/movies";
import { State } from "./state";

export const getters = {
  getMovie:
    (state: State) =>
    (title: string): Movie | undefined => {
      return state.movies.find((movie: Movie) => movie.title === title);
    },
};
