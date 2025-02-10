import React from "react";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#0b316c] to-[#11503d] shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Text Combo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/baltic-logo.png"
            alt="Baltic Shield Logo"
            className="h-8 w-auto"
          />
          <span className="text-white text-xl font-bold">BALTIC SHIELD</span>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#about" className="hover:text-blue-300">
              About
            </a>
          </li>
          <li>
            <a href="#goals" className="hover:text-blue-300">
              Our Goals
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
