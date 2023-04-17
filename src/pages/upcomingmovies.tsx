import React, { useEffect, useState } from "react";
import { getUpcomingMovies, Movie } from "../services/moviesservice";

export const UpcomingMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getUpcomingMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Upcoming Movies</h1>
      <ul className="grid lg:grid-cols-5 sm:grid-cols-4 mobile:grid-cols-3 relative z-[11]">
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>
              {movie.overview.length > 120 ? (
                <>{movie.overview.slice(0, 120)}...</>
              ) : (
                movie.overview
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMovies;
