import React from 'react'

const Headers = () => {
  return (
    <div style={{
        backgroundColor: 'lightgreen',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
        boxSizing: 'border-box'

    }}>
        <header>
            <h1>
                Header Content
            </h1>
        </header>
        <nav style={{
            display: 'flex',
            gap: '10px'
        }}>
            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                gap: '10px'
            }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Headers