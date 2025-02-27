import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white md:flex">
      <h1 className="w-full text-3xl font-bold text-[#44d644]">Portfolio.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#home">Home</a>
        </li>
        <li className="p-4">
          <a href="#about">About</a>
        </li>
        <li className="p-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-4">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button
        onClick={handleNav}
        className="block md:hidden"
        aria-label="Toggle navigation menu"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#44d644] m-4">
          Portfolio.
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-b-gray-700">
            <a href="#home" onClick={handleNav}>Home</a>
          </li>
          <li className="p-4 border-b border-b-gray-700">
            <a href="#about" onClick={handleNav}>About</a>
          </li>
          <li className="p-4 border-b border-b-gray-700">
            <a href="#projects" onClick={handleNav}>Projects</a>
          </li>
          <li className="p-4 border-b border-b-gray-700">
            <a href="#contact" onClick={handleNav}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
