import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Editor } from "novel";


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Editor completionApi='https://organic-broccoli-xgr54wv6944c65g7-3000.app.github.dev/generate'/>
  </div>
  )
}

export default App
