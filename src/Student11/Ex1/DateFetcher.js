import React from 'react' //This line imports the React module from the 'react' library. 
//React is a JavaScript library used for building user interfaces.

import { useState } from 'react' //This line imports the useState hook from the 'react' library. 
//The useState hook allows you to add state to functional components in React.

export const DateFetcher = () => { //This line defines a functional component called "DateFetcher" using an arrow function syntax.
// The component does not receive any props, as indicated by the empty parentheses.

    let [ date, setDate] = useState ("Unknown") //This line declares a state variable called "date" and its corresponding state update function, 
//"setDate", using the useState hook. The initial value of the "date" state is set to "Unknown"

  return (
    <div className='main'>
   
   <button onClick={() => setDate(new Date().toUTCString())}>Push</button>
    UTC Date: {date}


    </div>
  )
}


