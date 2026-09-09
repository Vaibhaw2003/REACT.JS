

const Navbar = () => {
  return (
    <div style={{backgroundColor: 'lightblue', padding: '10px'}}>
        <h1 style={{color: 'white', textAlign: 'center'}}>
            Navbar
        </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar