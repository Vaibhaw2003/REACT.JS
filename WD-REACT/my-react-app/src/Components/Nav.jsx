import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav style={{ backgroundColor: '#282c34', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ color: '#61dafb', margin: 0 }}>My React App</h2>
        </div>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 , width: '30%' ,gap: '20px'}}>
          <li><a href="/#Home.jsx" style={{ color: '#61dafb', textDecoration: 'none' }}>Home</a></li>
          <li><a href="/about" style={{ color: '#61dafb', textDecoration: 'none' }}>About</a></li>
          <li><a href="/contact" style={{ color: '#61dafb', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav