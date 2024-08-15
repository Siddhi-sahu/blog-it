import React from "react";
import SidebarIcon from "../assets/sidebar.svg";
import DashboardLinks from "./DashboardLinks";
import homeIcon from "../assets/home.svg";

const Sidebar = () => {
  return (
    <>
      <div className="col-span-1 md:col-span-2 bg-pink-900 text-white p-4 font-mono ">
        {/* <h2 className="text-lg md:text-xl font-semibold">Sidebar</h2> */}
        <div className="flex flex-col justify-between h-full">
          <div className=" flex flex-col justify-center items-center gap-10 mt-10">
            <DashboardLinks icon={homeIcon} label={"Home"} to={"/dashboard"} />
            <DashboardLinks />
            <DashboardLinks />
            <DashboardLinks />
          </div>
          <div>
            <img src={SidebarIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
