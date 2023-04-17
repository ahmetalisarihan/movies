import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(movie.id));
  }, []);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = favorites.includes(movie.id)
      ? favorites.filter((id: number) => id !== movie.id)
      : [...favorites, movie.id];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <li key={movie.id} className="relative">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h2 className="truncate h-16 max-h-16 overflow-hidden">{movie.title}</h2>
      <p className="text-gray-600">{movie.overview}</p>
      <FontAwesomeIcon
        icon={faHeart}
        className={`heart-icon absolute top-2 right-2 text-gray-500 cursor-pointer ${
          isFavorite ? "text-red-500" : ""
        }`}
        onClick={toggleFavorite}
      />
    </li>
  );
};

export default MovieCard;
