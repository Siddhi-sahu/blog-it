import React from "react";
import { Link } from "react-router-dom";

const DashboardLinks = ({ icon, label, to }) => {
  return (
    // <div className="flex hover:bg-pink-300 w-full rounded items-center p-2 sm:p-3">
    <div className="flex w-full rounded items-center p-2 sm:p-3 transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-pink-600">
      <Link
        to={to}
        className="flex flex-col sm:flex-row sm:space-x-2 items-center w-full"
      >
        <img
          src={icon}
          alt=""
          className="w-6 h-6 mb-1 sm:mb-0 flex-shrink-0 sm:mr-8 text-white"
        />
        <div className="text-center sm:text-left text-xs sm:text-base break-words w-auto sm:w-full">
          {label}
        </div>
      </Link>
    </div>
  );
};

export default DashboardLinks;
