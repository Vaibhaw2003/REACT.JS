import React from 'react'
import Headers from './components/Headers'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: 'lightgray',
        minHeight: '100vh'
      }}
    >
      <Headers />
      <Body />
      <Footer />
    </div>
  )
}

export default App