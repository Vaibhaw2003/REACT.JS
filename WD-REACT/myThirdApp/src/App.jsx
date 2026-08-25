import React from 'react'
import Navbar from './components/Navbar'
import Counter from './components/Counter'


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to My App</h1>
        <p>This is a simple React app.</p>
        <Counter />
      </main>
    </div>
  )
}

export default App