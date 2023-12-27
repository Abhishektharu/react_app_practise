import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 10;
  let [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter >= 10) {
      return;
    }

    setCounter(counter + 1);

    // counter = counter + 1;
    console.log(counter)
  }

  const decrement = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
    console.log(counter);
  }
  return (
    <>
      <h1>Counter Value: {counter} </h1>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default App
