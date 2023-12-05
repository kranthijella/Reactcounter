import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [count,SetCount] = useState(0);

    const addValue = ()=>{
        count = count + 1
        SetCount(count)

    }
    const removeValue =()=>{
        count = count - 1
        SetCount(count)
    }
  return (
    <>
        <h1>Counter value : {count}</h1>
        <br/>
        <button onClick={addValue}>Increment</button>
        <br/>
        <br/>
        <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
