import React from "react";
import './Main.css'
import { useState } from "react";

export const NumberBuilder = () => {
  let [counter, setCounter] = useState(0);
  let [add, setAdd] = useState('');


  const onHandleClick = () => {
    setCounter(++counter)
    setAdd(add +=(counter + ''))

 
  };
  const onHandleReset = () => {
    setAdd('');
    setCounter(0)

  }

  return (
    <div className="Main">
        
      <button onClick={() => onHandleClick()}>Add Number</button>
      <span>
        
        <button onClick={() => onHandleReset()}>Reset</button>
      </span>
      <br/>

     <p> Numbers: {add} </p>

    </div>
  );
};
