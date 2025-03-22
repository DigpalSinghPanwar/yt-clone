import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Live",
  "News",
  "History",
  "Songs",
  "Cricket",
  "Soccer",
  "Counter Strike",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((el, i) => (
        <Button name={el} key={i} />
      ))}
    </div>
  );
};

export default ButtonList;
