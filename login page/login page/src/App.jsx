import { useState } from "react";
const App = () => {
  
  const [a, setA] = useState(100);
  const changeA =()=>{
    console.log("clicked");
    setA(200);

  }

  return ( <div>
    <h1>hello my name is {a}</h1>
    <button onClick={changeA}>change here</button>
  </div> );
}
 
export default App;