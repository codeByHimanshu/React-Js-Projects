import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setValue] = useState(0)
  // let count = 5
  const increaseCounter = () => {
    if (count >= 15) {
      console.log("can't be greater than 20")
    }
    else {
      count = count + 1
      setValue(count)
      console.log('clicked', Math.random)
    }
  }
  const decreaseCounter = () => {
    if (count <= 0) {
      console.log("can not be negatiave value")
    } else {
      count = count - 1
      setValue(count)
    }

  }
  return (
    <>
      <h1> this a project for counting number</h1>
      <h2>Current Value is : {count}</h2>
      <br />
      <button onClick={increaseCounter}>Increase</button>
      <br /> <br />
      <button onClick={decreaseCounter}>Decrease</button>
    </>
  )
}

export default App
