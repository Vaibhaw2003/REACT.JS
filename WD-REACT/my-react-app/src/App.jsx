import React from 'react';
import Home from './assets/Components/Home';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

const App = () => {
  return (
    <div>
      <Nav />

      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to My React App</h1>
      <div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          This is a simple React application with a navigation bar and footer.
        </p>
        <img src="path/to/your/image.jpg" alt="Description of the image" />

      </div>
      <Footer />
      
    </div>
  )
}

export default App