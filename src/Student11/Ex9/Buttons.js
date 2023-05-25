import React from "react";

import { useState } from "react";

export const Buttons = () => {
  let [push, setPush] = useState("Push");
  let [pushed, setPushed] = useState("Push");

  const onHandleClick = (number) => {
    switch (number) {
      case 1:
        setPush("Pushed");
        break;
      case 2:
        setPushed("Pushed");
        break;
      case 3:
        setPush("Push");
        setPushed("Push");
        break;
      default:
        break;
    }
  };

  return (
    <div className="Main">
      <button onClick={() => onHandleClick(1)}>{push}</button>
      <br />
      <button onClick={() => onHandleClick(2)}>{pushed}</button>
      <br />
      <button onClick={() => onHandleClick(3)}>Reset</button>
      <br />
    </div>
  );
};
