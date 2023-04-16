import React from "react";
import { Link } from "react-router-dom"; // React Router'dan Link bileşenini import ediyoruz

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-200 h-full">
      <nav className="py-4">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favoritemovies ">Favorite Movies</Link>
          </li>
          <li>
            <Link to="/searchresult">Search Result</Link>
          </li>
          <li>
            <Link to="/nowplayingmovies">Now Playing Movies</Link>
          </li>
          <li>
            <Link to="/upcomingmovies">Upcoming Movies</Link>
          </li>
          <li>
            <Link to="/popularmovies">Popular Movies</Link>
          </li>
          <li>
            <Link to="/topratedmovies">Top Rated Movies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
