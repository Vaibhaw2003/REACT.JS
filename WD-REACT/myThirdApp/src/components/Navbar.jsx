import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header>
            <h1>My App</h1>
        </header>
        <nav>
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