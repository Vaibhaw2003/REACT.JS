import React from 'react'

const Navbar = () => {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
        <h1 style={{ margin: 0, color: '#333', }}>Navigation Page</h1>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px', margin: 0, padding: 0 }}>
                <li style={{ margin: 0 }}>
                    <a href="#home" style={{ textDecoration: 'none', color: '#007bff' }}>Home</a>
                </li>
                <li style={{ margin: 0 }}>
                    <a href="#about" style={{ textDecoration: 'none', color: '#007bff' }}>About</a>
                </li>
                <li style={{ margin: 0 }}>
                    <a href="#services" style={{ textDecoration: 'none', color: '#007bff' }}>Services</a>
                </li>
                <li style={{ margin: 0 }}>
                    <a href="#contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;