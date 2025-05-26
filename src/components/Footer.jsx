import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import pepelore from "../assets/pepelore.svg";
import dex from "../assets/dex.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Side - Logo and Copyright */}
        <div className="mb-6 md:mb-0">
          {/* <h1 className="text-2xl font-bold font-[cursive] tracking-wider">
            PEPE LORE
          </h1> */}
          <img src={pepelore} alt="Pepe Lore" />
          <p className="text-sm text-gray-400 mt-2">
            Copyright © 2025 | All Rights Reserved
          </p>
        </div>

        {/* Right Side - Links and Socials */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Navigation Links */}
          <ul className="space-y-1 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              <a href="#lore">Lore</a>
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              <a href="#tokenomics">Tokenomics</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div>
            <h3 className="text-yellow-400 font-bold mb-1">SOCIALS</h3>
            <div className="flex items-center gap-3 text-2xl">
              <a
                href="https://x.com/pepeloretoken"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://t.me/PepeLoreToken"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                <img src={dex} alt="screener" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
