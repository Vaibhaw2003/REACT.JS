import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>
          this is a practice for React. You can find the code in the src folder.
        </h1>
      </div>
    </div>
  )
}

export default App