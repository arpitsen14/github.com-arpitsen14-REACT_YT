import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setCounter]=useState(0)
  //let counter=15

  const addvalue=()=>{
    console.log("clicked",counter);
    //counter =counter+1;
    setCounter(counter+1)
  }
  const removevalue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h3>Counter Value {counter}</h3>

      <button onClick={addvalue}>add value</button><br />
      <button onClick={removevalue}>remove value</button>
    </>
  )

}

export default App
