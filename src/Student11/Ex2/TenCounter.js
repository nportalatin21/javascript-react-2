import React from "react";
import { useState } from "react";

export const TenCounter = () => {
  let [count, setCount] = useState(0);

  let onHandlePush = () => {

    if (count === 10) {
        setCount(0)
    }
    else 
        setCount(++count)
  }

  return (
    <div className="Count">
      <button onClick={() => onHandlePush() }>Push</button>
      
      Count: {count}
    </div>
  );
};

// export const DateFetcher = () => { //This line defines a functional component called "DateFetcher" using an arrow function syntax.
//     // The component does not receive any props, as indicated by the empty parentheses.

//         let [ date, setDate] = useState ("Unknown") //This line declares a state variable called "date" and its corresponding state update function,
//     //"setDate", using the useState hook. The initial value of the "date" state is set to "Unknown"

//       return (
//         <div className='main'>

//        <button onClick={() => setDate(new Date().toUTCString())}>Push</button>
//         UTC Date: {date}

//         </div>
//       )
