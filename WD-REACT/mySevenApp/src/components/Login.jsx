import React from 'react'
import './Login.css'

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login button clicked")
  }

  return (
    <div>
      <h1 Style={{ color: 'blue' }}>Login Page</h1>

      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
          />

          <input
            type="password"
            placeholder="Password"
          />
          <input type="text"
            placeholder="Email"
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
