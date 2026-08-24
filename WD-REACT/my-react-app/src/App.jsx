// import { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Nav";

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   return (
//     <div>
//       <Nav />
//       <h1>Counter App</h1>

//       <h2>{count}</h2>

//       <button onClick={increment}>Increment +</button>

//       <button onClick={decrement}>Decrement -</button>
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Navbar from './components/Navbar'

// const App = () => {
//   const [numbers, setNumbers] = React.useState(0);

//   const pluseTwo = () => {
//     setNumbers((prevCount) => prevCount + 2);
//   }

//   return (
//     <div>
//       <Navbar />

//       <h1>Counter App</h1>

//       <h2>{numbers}</h2>

//       <button onClick={pluseTwo}>
//         Plus Two
//       </button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>

    </div>
  )
}

export default App