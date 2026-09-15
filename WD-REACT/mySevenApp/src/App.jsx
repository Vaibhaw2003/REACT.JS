
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("My App")
  const [inputName, setInputName] = useState("")

  const handleClick = () => {
    setName(inputName)
  }

  return (
    <div className="App">
      <h1 id='name'>{name}</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter something..."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />

        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  )
}

export default App
