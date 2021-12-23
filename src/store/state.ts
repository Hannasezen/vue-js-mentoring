import { Movie } from "@/types/movies";
import movies from "../../data/movies.json";

export interface State {
  movies: Array<Movie>;
}

export const state = {
  movies,
};
