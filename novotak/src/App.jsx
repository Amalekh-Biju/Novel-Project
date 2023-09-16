import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Editor } from "novel";


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Editor completionApi='https://localhost:3000/'/>
  </div>
  )
}

export default App
