import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2d2e2d] text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
        <div className="flex items-center gap-1">
          <FaCopyright size={14} className="text-gray-400" />
          <span className="text-gray-400">{new Date().getFullYear()}</span>
        </div>
        <span className="hidden sm:block text-gray-400">|</span>
        <h1 className="text-gray-400">All Rights Reserved | Jarren James Parungao</h1>
      </div>
    </div>
  );
};

export default Footer;