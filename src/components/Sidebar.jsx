import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg fixed bg-white  pb-32 min-w-48 p-5 ">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h2 className="pt-5 font-bold">You</h2>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>
      <h2 className="pt-5 font-bold">Explore</h2>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
      </ul>
    </div>
  );
};

export default Sidebar;
