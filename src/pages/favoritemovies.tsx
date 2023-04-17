import React, { useEffect, useState } from "react";
import { getMovies } from "../services/moviesservice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export const FavoriteMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  const handleToggleFavorite = (movieId: number) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <ul className="grid lg:grid-cols-5 sm:grid-cols-3 mobile:grid-cols-3 relative z-[11]">
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h2 className="h-16 max-h-16 overflow-hidden">
              {movie.title}
            </h2>
            <p>
              {movie.overview.length > 120 ? (
                <>{movie.overview.slice(0, 120)}...</>
              ) : (
                movie.overview
              )}
            </p>
            <FontAwesomeIcon
              icon={faHeart}
              className={`heart-icon ${
                favorites.includes(movie.id) ? "text-red-500" : "text-gray-500"
              }`}
              onClick={() => handleToggleFavorite(movie.id)}
            />
          </li>
        ))}
      </ul>
      <ul>
        {movies
          .filter((movie) => favorites.includes(movie.id))
          .map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default FavoriteMovies;