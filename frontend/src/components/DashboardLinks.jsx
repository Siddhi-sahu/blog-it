import React from "react";
import { Link } from "react-router-dom";

const DashboardLinks = ({ icon, label, to }) => {
  return (
    <div className="flex bg-pink-300 w-full rounded  items-center p-2">
      <Link
        to={to}
        className="flex flex-col sm:flex-row sm:space-x-2 items-center w-full"
      >
        <img src={icon} alt="" className="w-6 h-6 mb-1 sm:mb-0" />
        <div className="text-center sm:text-left text-sm sm:text-base break-words w-full">
          {label}
        </div>
      </Link>
    </div>
  );
};

export default DashboardLinks;
