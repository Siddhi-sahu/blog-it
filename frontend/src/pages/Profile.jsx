import React from "react";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-4 md:col-span-10 p-6 overflow-y-auto"></div>
    </div>
  );
};

export default Profile;
