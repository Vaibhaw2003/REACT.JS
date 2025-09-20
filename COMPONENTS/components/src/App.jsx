import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return ( 
    <>
   <Header />
   <Footer />
   
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <h1>App Component</h1>
      <div className="flex p-2 gap-8 items-center">
        <h4>product</h4>
        <h4>items</h4>
        <h4>menu</h4>
        <h4>about</h4>
        
      </div>
    </nav>
    <Navbar />
    </>
   );
}
 
export default App;