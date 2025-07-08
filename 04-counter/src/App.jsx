import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);
 
  // let counter = 5;

  function addValue() {
    setCounter(counter + 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  function DecrementCounter() {
    if(counter <= 0) {
      alert("Counter cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  }


  return (
    <>
     <h1>Counter App</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Increment</button>
     <button
     onClick={resetCounter}
     >Reset</button>

     <button
     onClick={DecrementCounter}
     >Decrement</button>
    </>
  )
}

export default App
