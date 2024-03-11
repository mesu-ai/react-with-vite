import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Welcome</h1>
      <Link to='/login' style={{background:'green', color:'white', padding:'8px 40px', borderRadius:'5px'}}>Login</Link>
     
    </>
  )
}

export default App
