import { Movie } from "@/types/movies";
import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://react-cdp-api.herokuapp.com/",
});

export async function getMovies(): Promise<Movie[] | undefined> {
  try {
    const { data } = await axiosClient.get("movies");
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
