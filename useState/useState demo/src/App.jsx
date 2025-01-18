
// faltu code just to showcase were to use useState


import React, { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(17)
  const reactElement = React.createElement('a', {}, "faiz!!");


  const addValue = () => {
    if (counter < 50) {
      setCounter(counter + 1);
    }
    else {
      setCounter(0);
    }
  }
  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else {
      setCounter(50);
    }
  }

  return (

    <>
      <h1 className='bg-green-400 mb-7 text-black p-4 rounded'>why dont we use counter {reactElement}{counter}</h1>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <br />
      <button onClick={subValue}>Sub {counter}</button>
    </>
  )
}

export default App
