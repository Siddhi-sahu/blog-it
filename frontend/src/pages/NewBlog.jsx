import React from "react";
import Sidebar from "../components/Sidebar";
import InputBlog from "../components/InputBlog";

const NewBlog = () => {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
        <Sidebar />
        <div className="col-span-4 md:col-span-10 bg-gray-100 p-6 overflow-y-auto">
          <InputBlog />
        </div>
      </div>
    </>
  );
};

export default NewBlog;
