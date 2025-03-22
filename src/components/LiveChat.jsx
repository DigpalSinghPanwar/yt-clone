import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Hi, great info👏.",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="ml-2 p-2 h-[400px] border border-black bg-slate-100 rounded-lg overflow-auto flex flex-col-reverse">
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Digpal",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="ml-2  p-2 border border-black rounded-lg"
      >
        <input
          type="text"
          className="w-56 border-b"
          value={liveMessage}
          onChange={(e) => {
            // console.log(e.target.value);
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 ml-2 cursor-pointer bg-green-100">send</button>
      </form>
    </div>
  );
};

export default LiveChat;
