import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
        <Sidebar />

        {/* main content */}

        <div className="col-span-4 md:col-span-10 bg-gray-100 p-6">
          {/* <h1 className="text-2xl font-bold">Main Content</h1> */}
          <Navbar />
          <p className="mt-4">.........</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
