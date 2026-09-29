import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Home from "./components/Home";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* Projects */}
        <Route path="/projects" element={<Project />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
};

export default App;