import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import BlogsSection from "../components/BlogsSection";
import UserBlogs from "../components/blog/UserBlogs";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
        <Sidebar />

        <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
          <Navbar />
          {/* users cards */}
          <UserBlogs />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
