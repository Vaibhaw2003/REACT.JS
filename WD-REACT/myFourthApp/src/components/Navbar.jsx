
const Navbar = () => {
  return (
    <div style={{
        backgroundColor:'black',
        color:'white',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'10px 20px',
        height:'80px',
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
                <li style={{marginRight:'20px',color:'black', backgroundColor:'white', padding:'5px 10px', borderRadius:'5px',fontWeight:'bold'}}>Home</li>
                <li style={{marginRight:'20px',color:'black', backgroundColor:'white', padding:'5px 10px', borderRadius:'5px',fontWeight:'bold'}}>About</li>
                <li style={{marginRight:'20px',color:'black', backgroundColor:'white', padding:'5px 10px', borderRadius:'5px',fontWeight:'bold'}}>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar