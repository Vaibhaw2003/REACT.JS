import React from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Home from './components/Home.jsx'
import Counter from './components/Counter.jsx'


const App = () => {
  return (
    <div style={{backgroundColor: 'lightblue', padding: '10px'}}>
      <h1 style={{color: 'white', textAlign: 'center'}}>
        Welcome to My App
      </h1>
      <p style={{color: 'white', textAlign: 'center'}}>
        This is a simple React application.
      </p>  
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
        <Home />
        <App />
        <Counter />
      </div>
    </div>
  )
}

export default App