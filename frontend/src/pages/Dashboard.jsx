import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BlogsSection from "../components/BlogsSection";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
        <Sidebar />

        <div className="col-span-4 md:col-span-10 bg-gray-100 p-6 overflow-y-auto">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
