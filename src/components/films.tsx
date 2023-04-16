import axios from "axios";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY; // API anahtarınızı burada alın
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY_PARAM = `api_key=${TMDB_API_KEY}`;

// Filmleri çekmek için API isteği gönderme
export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?${API_KEY_PARAM}`);
    return response.data.results;
  } catch (error) {
    console.error('Filmler alınırken bir hata oluştu:', error);
  }
};