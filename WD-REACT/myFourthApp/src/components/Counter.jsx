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
    <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        backgroundColor:'green',

    }}>
        <h1 Style={{color:'white', backgroundColor:'green', padding:'10px'}}>Counter</h1>
        <p Style={{color:'white', backgroundColor:'green', padding:'10px'}}>Count: {count}</p>
        <button Style={{color:'white', backgroundColor:'green', padding:'10px', borderRadius:'5px'}} onClick={increment}>Increment</button>
        <button Style={{color:'white', backgroundColor:'red', padding:'10px', borderRadius:'5px'}} onClick={decrement}>Decrement</button>
        <button Style={{color:'white', backgroundColor:'blue', padding:'10px', borderRadius:'5px'}} onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter