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
            alignItems:'center',
        }}>
            <h1 style={{
                color:'white',
                backgroundColor:'black',
                padding:'10px',
                borderRadius:'5px'
            }}>
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
                <li style={{marginRight:'20px',color:'blue'}}>Home</li>
                <li style={{marginRight:'20px',color:'blue'}}>About</li>
                <li style={{marginRight:'20px',color:'blue'}}>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar