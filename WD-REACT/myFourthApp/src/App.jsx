import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
      <Navbar />
      <Counter />
      <Footer />
    </div>
  )
}


export default App