import React from 'react'
import { useState } from 'react';

export const CarCounter = () => {
    let [ford, setFord] = useState(0);
    let [toyota, setToyota] = useState(0);
    let [chevy, setchevy] = useState(0);
    let [add, setAdd] = useState('');

    const onHandleClick = () => {
        setFord(++ford)
        setAdd(add +=(ford + ''))
    
     
      };

      const onHandlePush = () => {
        setToyota(++toyota)
        setAdd(add +=(ford + ''))
    
     
      };

      const onHandleChevy = () => {
        setchevy(++chevy)
        setAdd(add +=(ford + ''))
    
     
      };
    //   const onHandleReset = () => {
    //     setAdd('');
    //     setCounter(0)
    
    //   }
    
  return (
    <div className='Main'>
   
    
     <button onClick={() => onHandleClick()}>Ford</button>
     <button onClick={() => onHandlePush()}>Toyota</button>
     <button onClick={() => onHandleChevy()}>Chevy</button>

     <p>Ford: {ford} </p> 
     <p>Toyota: {toyota} </p>
     <p>Chevy:{chevy}</p>
    <p>Total:{(ford + chevy + toyota)} </p>
     </div>

  )
}
