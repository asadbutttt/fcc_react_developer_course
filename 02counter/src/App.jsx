import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    setCounter(counter + 1)
    // setCounter((prevVounter) => prevCounter +1 )
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with Asad! {counter} </h1>
      <h2>Counter Value : {counter} </h2>
      <button
        onClick={addValue}
      >Add Value</button> {" "}
      <button
        onClick={removeValue}
      >Remove Value</button>
      <p>footer: </p>
    </>
  )
}

export default App
