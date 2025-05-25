import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import pepelore from "../assets/pepelore.svg";
import dex from "../assets/dex.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black text-white px-6 py-4 w-full z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={pepelore} alt="Pepe Lore" className="h-8 w-auto" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <a
            href="#about"
            className="hover:text-lime-400 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#lore"
            className="hover:text-lime-400 transition-colors duration-200"
          >
            Lore
          </a>
          <a
            href="#tokenomics"
            className="hover:text-lime-400 transition-colors duration-200"
          >
            Tokenomics
          </a>

          <a
            href="https://x.com/pepeloretoken"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-lime-400"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://t.me/PepeLoreToken"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-lime-400"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-lime-400"
          >
            <img src={dex} alt="screener" />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-4 text-sm font-semibold px-6">
          <a href="#about" className="hover:text-lime-400 w-full">
            About
          </a>
          <a href="#lore" className="hover:text-lime-400 w-full">
            Lore
          </a>
          <a href="#tokenomics" className="hover:text-lime-400 w-full">
            Tokenomics
          </a>

          <div className="flex space-x-4 pt-2">
            <a
              href="https://x.com/pepeloretoken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-lime-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://t.me/PepeLoreToken"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-lime-400"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-lime-400"
            >
              <img src={dex} alt="screener" className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
