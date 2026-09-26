import React from 'react'

const Navbar = () => {
  return (
    <div Style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <nav className="navbar">
        <h1 className="navbar-logo">React Practice</h1>
        <ul className="navbar-links">
          <li><a href="https://reactjs.org/docs/getting-started.html" className="navbar-link">React Docs</a></li>
          <li><a href="https://reactjs.org/tutorial/tutorial.html" className="navbar-link">React Tutorial</a></li>
          <li><a href="https://reactjs.org/community/support.html" className="navbar-link">React Community</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar