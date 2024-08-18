import React from "react";
// import SidebarIcon from "../assets/sidebar.svg";
import DashboardLinks from "./DashboardLinks";
import homeIcon from "../assets/home.svg";
import searchIcon from "../assets/search.svg";
import newIcon from "../assets/new.svg";
import profileIcon from "../assets/profile.svg";

const Sidebar = () => {
  return (
    <>
      <div className="col-span-1 md:col-span-2 bg-pink-900 text-white font-bold p-4 font-mono  h-screen sticky top-0 ">
        <div className="flex flex-col justify-between h-full">
          <div className=" flex flex-col justify-center items-center gap-10 mt-10">
            <DashboardLinks icon={homeIcon} label={"Home"} to={"/dashboard"} />
            <DashboardLinks icon={newIcon} label={"Explore"} to={"/explore"} />
            <DashboardLinks icon={searchIcon} label={"Search"} to={""} />
            <DashboardLinks icon={profileIcon} label={"Profile"} to={""} />
          </div>
          {/* <div>
            <img
              src={SidebarIcon}
              alt=""
              className="transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
