import { Movie } from "@/types/movies";
import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://react-cdp-api.herokuapp.com/",
});

export type GetMoviesParams = {
  sortBy?: string;
  sortOrder?: string;
  search?: string;
  searchBy?: string;
  filter?: string;
  offset?: string;
  limit?: string;
};

export async function getMovies(
  params: GetMoviesParams
): Promise<Movie[] | undefined> {
  try {
    const { data } = await axiosClient.get("movies", { params });
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
