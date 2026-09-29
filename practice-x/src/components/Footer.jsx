import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / Name */}
          <h2 className="text-2xl font-bold text-red-500">
            Tailwind CSS
          </h2>

          {/* Footer Links */}
          <ul className="flex gap-6">
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
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-5 text-center">
          <p className="text-gray-400">
            © 2026 Tailwind CSS. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;