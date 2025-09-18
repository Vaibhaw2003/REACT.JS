import { useState } from "react";

const App = () => {

const [a, setA] = useState(0);

  return ( <div>
    <h1>number is _ {a} </h1>
    <button onClick={function(){
      setA(a+1)
    }}>increment</button>

    <button onClick={function(){
      setA(a-1)
    }}>decrement</button>

  </div> );
}
 
export default App;