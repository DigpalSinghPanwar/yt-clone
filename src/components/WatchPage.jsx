import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  //   console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
    scrollTo({ top: 0 });
  }, []);

  return (
    <div className="w-full">
      <div className="m-2  grid grid-cols-12 grid-flow-row">
        <div className="col-span-9">
          <iframe
            className="w-full"
            // width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-span-3">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
