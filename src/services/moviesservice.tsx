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
    console.error('Failed to fetch movies:', error);
    return [];
  }
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error("Failed to fetch top rated movies:", error);
      return [];
    }
  };

  export const getNowPlayingMovies = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
      return [];
    }
  };

  export const getUpcomingMovies = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      return response.data.results;
    } catch (error) {
      console.error("Failed to fetch upcoming movies:", error);
      return [];
    }
  };

  export const getLatestMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch last movies:", error);
      return null;
    }
  };

  export const getPopularMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Failed to fetch popular movies:', error);
      return [];
    }
  };