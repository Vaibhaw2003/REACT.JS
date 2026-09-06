import React from 'react'

const App = () => {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>My Registration Form</p>
      <form action="/submit" method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App