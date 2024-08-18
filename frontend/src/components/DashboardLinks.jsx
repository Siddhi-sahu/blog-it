import React from "react";
import { Link } from "react-router-dom";

const DashboardLinks = ({ icon, label, to }) => {
  return (
    // <div className="flex hover:bg-pink-300 w-full rounded items-center p-2 sm:p-3">
    <div className="flex w-full rounded items-center p-2 lg:p-3 transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-pink-600">
      <Link
        to={to}
        className="flex flex-col lg:flex-row lg:space-x-2 items-center w-full"
      >
        <img
          src={icon}
          alt=""
          className="w-6 h-6 mb-2 lg:mb-0 flex-shrink-0 lg:mr-8 text-white"
        />
        <div className="text-center lg:text-left text-xs lg:text-base break-words w-auto lg:w-full">
          {label}
        </div>
      </Link>
    </div>
  );
};

export default DashboardLinks;
