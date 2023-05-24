import React from 'react'
import { useState } from 'react';

export const RandomNumber = () => {
    let [number, setNumber] = useState(0);

    const onHandleClick = () => {

        setNumber(Math.floor((Math.random() * 10)) + 1)

    }

  return (
    <div className='Main'>
   <p>Random Number: {number} </p> 
    <br/>
     <button onClick={() => onHandleClick(number)}>Generate</button>
     </div>
  )
}
