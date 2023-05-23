import React from "react";
import { useState } from "react";

export const MinMaxCounter = () => {
  let [count, setCount] = useState(0);

  let onHandlePush = (direction) => {

    if (direction === "Up") {

        setCount(++count)

    }
    else 
        setCount(--count)
  }

  return (
    <div className="Count">
      <button onClick={() => onHandlePush("Down") }>Down</button> {count}<span><button onClick={() => onHandlePush("Up") }>Up</button></span>
      
     

      {/* <button onClick={() => onHandlePush("Up") }>Up</button> */}

    </div>
  );
};