import React from 'react'

const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'lightgray', padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: '0' , color: 'black' }}>Data Quotes</h1>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px', margin: '0', padding: '0' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar