import React from 'react';
import Home from './assets/Components/Home';

const App = () => {
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

      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to My React App</h1>
      <div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          This is a simple React application with a navigation bar and footer.
        </p>
        <img src="path/to/your/image.jpg" alt="Description of the image" />

      </div>

      <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px', backgroundColor: '#f1f1f1', position: 'fixed', bottom: 0, width: '100%' }}>
        &copy; 2024 My React App. All rights reserved.
      </footer>
      
    </div>
  )
}

export default App