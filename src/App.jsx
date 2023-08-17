import { useState } from 'react'
import './App.css'
import { Navbar } from './components'
import { Home } from './Home'
import { MainApp } from './MainApp'

function App() {
  const [showHome, setShowHome] = useState(true)
  
  return (
    <>
      <Navbar />
      {showHome ? <Home setShowHome={setShowHome}/> : <MainApp/>}
    </>
  )
}

export default App
