
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 style={
          {
            color:"green",
            background:"black"
          }
        }>My React App</h1>
        <ul style={{ listStyle: 'none', display: 'flex' }} className="nav-links">
          <li><a href="/" className="navlink">Home</a></li>
          <li><a href="/about" className="navlink">About</a></li>
          <li><a href="/contact" className="navlink">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar