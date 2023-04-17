import axios from 'axios';
import { API_KEY, BASE_URL } from '../config';

interface MovieData {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  }
  
  type SearchResults = MovieData[];
  
export const searchMovies = async (query: string): Promise<SearchResults> => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getPopularMovies = async (): Promise<SearchResults> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error getting popular movies:', error);
    return [];
  }
};



  