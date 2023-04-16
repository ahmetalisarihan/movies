import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { Home } from "./pages/home";
import { FavoriteMovies } from "./pages/favoritemovies";
import { SearchResult } from "./pages/searchresult";
import { UpcomingMovies } from "./pages/upcomingmovies";
import { TopRatedMovies } from "./pages/topratedmovies";
import { PopularMovies } from "./pages/popularmovies";
import { NowPlayingMovies } from "./pages/nowplayingmovies";
import Sidebar from "./components/sidebar";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Sidebar />

        <Outlet />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritemovies" element={<FavoriteMovies />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/nowplayingmovies" element={<NowPlayingMovies />} />
          <Route path="/upcomingmovies" element={<UpcomingMovies />} />
          <Route path="/popularmovies" element={<PopularMovies />} />
          <Route path="/topratedmovies" element={<TopRatedMovies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
