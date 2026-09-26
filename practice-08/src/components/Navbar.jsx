import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo">React Practice</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="navbar-links">
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Docs
              </a>
            </li>

            <li>
              <a
                href="https://react.dev/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Tutorial
              </a>
            </li>

            <li>
              <a
                href="https://react.dev/community"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;