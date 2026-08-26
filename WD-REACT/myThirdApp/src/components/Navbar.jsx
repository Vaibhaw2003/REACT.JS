import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <header>
            <h1>My App</h1>
        </header>
        <nav className="nav-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar