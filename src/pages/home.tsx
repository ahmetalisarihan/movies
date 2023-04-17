import React, { useEffect, useState } from "react";
import { getLatestMovie } from "../services/moviesservice";

import { FavoriteMovies } from "./favoritemovies";
import { UpcomingMovies } from "./upcomingmovies";
import { TopRatedMovies } from "./topratedmovies";
import { PopularMovies } from "./popularmovies";
import { NowPlayingMovies } from "./nowplayingmovies";

interface LatestMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const Home: React.FC = () => {
  const [latestMovie, setLatestMovie] = useState<LatestMovie | null>(null);

  useEffect(() => {
    const fetchLatestMovie = async () => {
      const movie = await getLatestMovie();
      setLatestMovie(movie);
    };
    fetchLatestMovie();
  }, []);



  return (
    <div>
      <div style={{ height: "50vh", backgroundColor: "lightgray" }}>
        {latestMovie ? (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${latestMovie.poster_path}`}
              alt={latestMovie.title}
            />
            <p>{latestMovie.overview}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <NowPlayingMovies />
      <TopRatedMovies />
      <UpcomingMovies />
      <FavoriteMovies />
      <PopularMovies />
    </div>
  );
};

export default Home;
