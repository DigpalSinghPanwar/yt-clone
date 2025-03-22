import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  items-center shadow-sm my-2 py-2 ">
      <img
        className="h-8"
        alt="user"
        src="https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg"
      />
      <span className="px-2 font-medium">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
