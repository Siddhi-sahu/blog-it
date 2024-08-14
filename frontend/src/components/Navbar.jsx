import React from "react";
import BlogIcon from "../assets/blog.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-pink-300 p-4 md:p-5 shadow-md rounded-lg">
      <div className="flex items-center space-x-2">
        <div className="bg-pink-500 text-white rounded-full p-2 hidden md:block">
          <img src={BlogIcon} alt="Blog" className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        <a href="/" className="text-2xl font-bold">
          <span className="text-pink-600 font-mono text-xl">Blog</span>
          <span className="text-pink-900 font-mono text-xl">it</span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {/* <a href="/about" className="text-black hover:text-blue-500">
          About
        </a>
        <a href="/services" className="text-black hover:text-blue-500">
          Services
        </a>
        <a href="/contact" className="text-black hover:text-blue-500">
          Contact
        </a> */}
        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:hover:bg-pink-700">
          Log out
        </button>
      </div>

      <div className="md:hidden">
        <button className="text-pink-900 text-2xl">&#9776;</button>
      </div>
    </div>
  );
};

export default Navbar;
