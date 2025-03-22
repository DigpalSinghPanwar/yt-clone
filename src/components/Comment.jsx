import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex p-2 my-2 shadow-sm bg-gray-100 rounded-lg">
      <img
        className="h-12 w-12"
        alt="user"
        src="https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg"
      />
      <div className="px-3 ">
        <p className="font-medium">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
