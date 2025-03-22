import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, thumbnails, title } = snippet;

  //   console.log(info);
  return (
    <div className="p-2 m-2 shadow-lg w-72 cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-600">
      <VideoCard info={info} />
    </div>
  );
};
