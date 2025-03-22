import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionList(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await res.json();
    setSuggestionList(data[1]);
    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
    // console.log(data[1]);
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-4">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />

        <img
          className="h-8 px-2"
          alt="youtube"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-6 col-start-4 col-end-10 ">
        <div className="">
          <input
            className="px-2 w-9/12 border border-gray-400 p-1 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 text-gray-400 px-4 py-1 rounded-r-full cursor-pointer">
            🔍
          </button>
        </div>
        <div className="absolute bg-white w-5/12 p-2 rounded-lg shadow-lg">
          <ul>
            {showSuggestion &&
              suggestionList.map((s) => (
                <li key={s} className="hover:bg-gray-100 p-2 shadow-sm">
                  🔎 {s}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 col-start-11 flex justify-end">
        <img
          className="h-8"
          alt="user"
          src="https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg"
        />
      </div>
    </div>
  );
};

export default Head;
