import React from "react";
import './Main.css'
import { useState } from "react";

export const MinMaxCounter = () => {
  let [counter, setCounter] = useState(0);
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(0);

  const onHandleClick = (direction) => {
    if (direction === "Up") {
      setCounter(++counter);
      if (counter > max) {
        setMax(counter);
      }
    } else {
      setCounter(--counter);

      if (counter < min) {
        setMin(counter);
      }
    }
 
  };

  return (
    <div className="Main">
        
      <button onClick={() => onHandleClick("Down")}>Down</button>{counter}
      <span>
        
        <button onClick={() => onHandleClick("Up")}>Up</button>
      </span>

      <br />
      <p>Min: {min}
      <br />
      <br/>
      Max: {max}
      </p>
    </div>
  );
};
