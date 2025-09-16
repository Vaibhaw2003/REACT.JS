import React, { useState } from 'react';
const App = () => {

useStateSnippet


  let user =  "harsh"; //object assignment
  function abc() {
    console.log(user);
    user = " thakur harsh singh";
    console.log(user);
  }
  const a = 5;  //value assignment

  return ( <div>
    <h1>menu {a}</h1>
    <h2>products {user} </h2> 
    <button onClick={abc}>change user</button>
  </div> );
}
 
export default App;