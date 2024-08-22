import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import InputBlog from "../components/InputBlog";

const EditBlog = () => {
  const { blogId } = useParams();
  //{blogId : "23kfnsk34rj3"}

  //continue from here

  const [blog, setBlog] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getUserBlog = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/blog/update/blogs/:${blogId}`,
        {
          headers: {
            Authorization: `Bearer + ${token}`,
          },
        }
      );

      setBlog(response.data.blog);

      getUserBlog();
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
        <Sidebar />
        <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
          <InputBlog />
        </div>
      </div>
    </>
  );
};

export default EditBlog;
