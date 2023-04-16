import React, { useState, useEffect } from 'react';
import { getPopularMovies, searchMovies } from '../services/tmdbservice';

interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

type SearchResults = MovieData[];

const SearchResult: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      let fetchedMovies: MovieData[] = [];
      if (searchQuery === '') {
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
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Filmleri Ara..."
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
