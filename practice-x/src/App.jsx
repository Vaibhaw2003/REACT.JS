import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>

      {/* Show Navbar only after login */}
      {isLoggedIn && <Navbar />}

      <Routes>

        {/* First page */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Register />
            )
          }
        />

        {/* Protected pages */}
        <Route
          path="/about"
          element={
            isLoggedIn ? <About /> : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/projects"
          element={
            isLoggedIn ? <Project /> : <Navigate to="/login" replace />
          }
        />

        <Route
          path="/contact"
          element={
            isLoggedIn ? <Contact /> : <Navigate to="/login" replace />
          }
        />

      </Routes>

      {/* Show Footer only after login */}
      {isLoggedIn && <Footer />}

    </BrowserRouter>
  );
};

export default App;