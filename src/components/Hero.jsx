import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import pepelore from "../assets/pepelore.svg";
import hero from "../assets/pepe-hero.png";
// import dex from "../assets/dex.png";

const Hero = () => {
  const tokenAddress = "CA - "; // Replace with your actual address

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenAddress);
    alert("Token address copied!");
  };

  return (
    <section id="about" className="hero flex flex-col-reverse md:flex-row md:items-center md:justify-end px-6 md:px-16 pt-10 text-white">
      {/* Left side Content */}
      <div className="w-full md:w-1/2 flex md:hidden justify-center items-end pt-8 md:pt-0">
        <img src={hero} alt="Pepe" className="" />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-[40%] md:text-left space-y-6 flex flex-col justify-center">
        <img src={pepelore} alt="PEPE LORE" className="" />

        <div className="flex flex-col justify-center items-center gap-2">
          <p className="uppercase font-bold tracking-wider mb-2 bg-black px-3 py-1">
            Token Address
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-black rounded px-3 py-2 w-[90%]">
            <p className="text-black font-mono break-all mb-2 sm:mb-0">
              {tokenAddress}
            </p>
            <button
              className="bg-black text-white px-3 py-1 text-xs font-bold cursor-pointer rounded shadow-[#e6a95e] shadow hover:bg-gray-800"
              onClick={copyAddress}
            >
              COPY ADDRESS
            </button>
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center items-center">
          <button className="bg-white text-black font-bold px-6 py-2 rounded-lg cursor-pointer shadow shadow-purple-500">
            WELCOME
          </button>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a
              href="https://x.com/pepeloretoken"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-2 rounded-lg"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://t.me/PepeLoreToken"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2"
            >
              <FaTelegramPlane />
            </a>
            {/* <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-2"
            >
              <img src={dex} alt="screener" className="h-5 w-5" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
