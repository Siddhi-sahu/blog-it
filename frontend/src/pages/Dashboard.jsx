import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
        {/* sidebar */}
        <div className="col-span-1 md:col-span-2 bg-pink-900 text-white p-4">
          <h2 className="text-lg md:text-xl font-semibold">Sidebar</h2>
          <ul className="mt-4">
            <li className="mb-2">Item 1</li>
            <li className="mb-2">Item 2</li>
            <li className="mb-2">Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>

        {/* main content */}

        <div className="col-span-4 md:col-span-10 bg-gray-100 p-6">
          {/* <h1 className="text-2xl font-bold">Main Content</h1> */}
          <Navbar />
          <p className="mt-4">this is main content area.</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
