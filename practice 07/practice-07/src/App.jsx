import React from 'react'
import Cards from './assets/components/Cards'
import Navbar from './assets/components/Navbar'

const App = () => {
  return (
    <div>
      <>
          <nav id='nav'>
            <a href="home">HOME</a>
            <a href="explore">EXPLORE</a>
            <a href="ABOUT">ABOUT</a>
            <a href="CONTACT US">CONTACT US</a>
          </nav>

          <div className='cards'>
            <Cards />
            <Cards />
            <Navbar />
          </div>

          <div id='body'>
            <img src="https://tse3.mm.bing.net/th/id/OIP.LEXM9Ey9MqapCpGxmchYSgHaHa?pid=Api&P=0&h=180" alt="" />
            <img src="https://tse3.mm.bing.net/th/id/OIP.LJtUSOSKI6bKCzUvKFNMeQHaEK?pid=Api&P=0&h=180" alt="" />
            <button>submit</button>
          </div>

          <div id='footer'>
            <footer >
              <h1>tahnks for visit</h1>
              <h1> contact us</h1>
              <h1>about</h1>
            </footer>
          </div>
      </>
    </div>
  )
}

export default App