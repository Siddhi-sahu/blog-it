import React from "react";
import BlogIcon from "../assets/blog.svg";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    try {
      localStorage.removeItem("token");
      navigate("/signin");
    } catch (err) {
      console.log("error logging out ", err);
    }
  };
  return (
    <div className="flex justify-between items-center bg-pink-300  p-4 md:p-5 shadow-md rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-100 hover:shadow-lg">
      <div className="flex items-center space-x-2">
        <div className="bg-pink-500 text-white rounded-full p-2 hidden md:block transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg ">
          <img src={BlogIcon} alt="Blog" className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        <a href="/" className="text-2xl font-bold ">
          <span className="text-pink-600 font-mono text-2xl">Blog</span>
          <span className="text-pink-900 font-mono text-2xl">it</span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={handlelogout}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow"
        >
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
