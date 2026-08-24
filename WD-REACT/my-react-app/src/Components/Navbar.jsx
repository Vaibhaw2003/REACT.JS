// Nav.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#282c34",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <div>
        <h2
          style={{
            color: "#61dafb",
            margin: 0,
            cursor: "pointer",
          }}
        >
          My React App
        </h2>
      </div>

      {/* Navigation Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "25px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/services"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;