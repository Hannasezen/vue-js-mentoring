import { Movie } from "@/types/movies";

export interface State {
  movies: Array<Movie>;
}

export const state = {
  movies: [],
};
