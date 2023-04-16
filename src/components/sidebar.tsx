import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/4">
      <nav className="py-4">
        <ul className="flex flex-col p-4">
          <li className="py-2">
            <NavLink className="hover:text-gray-400" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-gray-400" to="/favoritemovies ">Favorite Movies</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="hover:text-gray-400" to="/searchresult">Search Result</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="hover:text-gray-400" to="/nowplayingmovies">Now Playing Movies</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="hover:text-gray-400" to="/upcomingmovies">Upcoming Movies</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="hover:text-gray-400" to="/popularmovies">Popular Movies</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="hover:text-gray-400" to="/topratedmovies">Top Rated Movies</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
