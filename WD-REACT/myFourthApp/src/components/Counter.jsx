import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(2);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
  return (
    <>
      <div style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          height:'100%',
          backgroundColor:'green',
          gap:'10px',
          marginTop:'20px',

      }}>
          <h1 style={{color:'white', backgroundColor:'green', padding:'10px'}}>Counter</h1>
          <p style={{color:'white', backgroundColor:'green', padding:'10px'}}>Count: {count}</p>
         
      </div>
      <div style={{
          display:'flex',
          justifyContent:'center',
          marginTop:'20px',
      }}>
          <button onClick={increment} style={{color:'white', backgroundColor:'green', padding:'10px', marginRight:'10px'}}>Increment</button> 
          <button onClick={decrement} style={{color:'white', backgroundColor:'red', padding:'10px', marginRight:'10px'}}>Decrement</button>
          <button onClick={reset} style={{color:'white', backgroundColor:'blue', padding:'10px'}}>Reset</button>
      </div>
    </>
  );
}

export default Counter