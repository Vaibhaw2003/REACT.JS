import React from 'react'
import Navbar from './components/Navbar'
import Quotes from './components/Quotes'
import ImageApi from './components/ImageApi'


const App = () => {
  return (
    <div>
      <>
      <Navbar />
      <Quotes />
      <ImageApi />
      </>
    </div>
  )
}

export default App