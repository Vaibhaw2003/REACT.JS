import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              Tailwind CSS
            </h2>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Building modern, responsive and beautiful web interfaces
              using React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-red-500 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-red-500 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-red-500 transition duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-red-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Follow Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Vaibhaw2003"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/05vaibhaw-singh/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            © 2026{" "}
            <span className="text-red-500 font-semibold">
              Tailwind CSS
            </span>
            . All rights reserved.
          </p>

          <p className="text-gray-500 text-xs mt-2">
            Built with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;