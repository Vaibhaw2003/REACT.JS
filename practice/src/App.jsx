import React, { useState } from 'react'
import Products from './Products'

const App = () => {
  var [a,b] = useState(5);


  return (
    <>
    <header className='w-full h-screen aling-center bg-black text-white items-center p-4'>
      <h5>{a}</h5>
      <button onClick={()=>b(a*2)} className='bg-green-500 p-3 rounded-md '>submit</button>
      <h5>about</h5>
      <h5>contact</h5>
    </header>
    
    <div className='w-full h-screen bg-zinc-900 text-white'>App</div>
    <Products />

    </>
  )
}

export default App