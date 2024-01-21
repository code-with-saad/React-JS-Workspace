import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    setCounter(counter + 1)
    if (counter >= 20) {
      console.log("You cant add more than 20 values")
      setCounter(counter)
    }
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if (counter <= 0) {
      console.log("You cant go to negative values")
      setCounter(counter)
    }
  }


  return (
    <>
    
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
