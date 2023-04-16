import axios from 'axios';
import { API_KEY, BASE_URL } from '../config';

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  }

export const getMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
      return [];
    }
  };
