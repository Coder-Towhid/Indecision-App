import { useState } from 'react'
import './App.css'
import Indecision from './components/Indecision'

function App() {
  const [count, setCount] = useState([])

  return (
    <div className="App">
     <Indecision/>
    </div>
  )
}

export default App
