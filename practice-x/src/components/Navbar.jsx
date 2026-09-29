import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">
          VS Developer
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">

          <li>
            <a
              href="/"
              className="text-gray-300 hover:text-red-500 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="text-gray-300 hover:text-red-500 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/projects"
              className="text-gray-300 hover:text-red-500 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="text-gray-300 hover:text-red-500 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition duration-300"
        >
          Login
        </button>

      </nav>
    </header>
  );
};

export default Navbar;