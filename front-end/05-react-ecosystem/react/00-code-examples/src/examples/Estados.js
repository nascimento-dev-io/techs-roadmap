import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // let counter = 0;

  function handleClick(){
   setCounter(counter + 1)
    console.log(counter);
  }

 

  return (
   <>
      <div>
        Contador: {counter}
      </div>
      <button onClick={handleClick}>Incrementar</button>
   </>
  )
}

export default Counter