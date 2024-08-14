import React from "react";
import SidebarIcon from "../assets/sidebar.svg";

const Sidebar = () => {
  return (
    <>
      <div className="col-span-1 md:col-span-2 bg-pink-900 text-white p-4">
        {/* <h2 className="text-lg md:text-xl font-semibold">Sidebar</h2> */}
        <div className="flex flex-col align-super">
          <div className=" flex flex-col justify-center items-center gap-10 mt-10">
            <div className="mb-2"> 1</div>
            <div className="mb-2"> 2</div>
            <div className="mb-2"> 3</div>
            <div> 4</div>
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
