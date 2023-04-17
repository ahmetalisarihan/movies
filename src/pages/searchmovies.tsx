import React, { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdbservice";

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

type SearchResults = MovieData[];

const SearchResult: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchMovies = async () => {
      let fetchedMovies: MovieData[] = [];
      if (searchQuery === "") {
        fetchedMovies = await getPopularMovies();
      } else {
        fetchedMovies = await searchMovies(searchQuery);
      }
      setMovies(fetchedMovies);
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      <div className="flex items-center">
        <div className="flex border border-blue-200 rounded">
          <input
            className="block w-full px-4 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
          />
          <button className="px-4 text-white bg-blue-600 border-l rounded ">
            Search
          </button>
        </div>
      </div>

      <ul className="grid lg:grid-cols-5 sm:grid-cols-4 mobile:grid-cols-3 relative z-[11]">
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="h-16 max-h-16 overflow-hidden">{movie.title}</h3>
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

export default SearchResult;
