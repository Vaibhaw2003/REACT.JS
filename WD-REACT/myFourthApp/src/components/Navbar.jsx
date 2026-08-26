import React from 'react'

const Navbar = () => {
  return (
    <div style={{
        backgroundColor:'black',
        color:'white',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'10px 20px'

    }}>
        <header style={{
            display:'flex',
            alignItems:'center'
        }}>
            <h1>
                Navbar
            </h1>
        </header>
        <nav style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <ul style={{
                display:'flex',
                listStyle:'none'
            }}>
                <li style={{marginRight:'20px'}}>Home</li>
                <li style={{marginRight:'20px'}}>About</li>
                <li style={{marginRight:'20px'}}>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar