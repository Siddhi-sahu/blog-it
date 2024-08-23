import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import InputBlog from "../components/InputBlog";

const EditBlog = () => {
  const { blogId } = useParams();
  //{blogId : "23kfnsk34rj3"}
  console.log(blogId);
  //continue from here

  const [title, setTitle] = useState("");

  const [blog, setBlog] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getUserBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/blog/userblog/${blogId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { title, blog } = response.data.blog;

        console.log("Title:", title);
        console.log("Blog:", blog);

        setTitle(title || ""); //undefined avoid krna hai isilye empty string
        setBlog(blog || "");
      } catch (err) {
        console.log("user blog error", err);
      }
    };
    getUserBlog();
  }, [blogId]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
        <Sidebar />
        <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
          <form action="/" method="POST" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center flex-col p-4 max-w-lg mx-auto lg:max-w-3xl 2xl:max-w-6xl font-mono">
              <input
                // onChange={(e) => {
                //   setTitle(e.target.value);
                // }}
                defaultValue={title}
                type="text"
                className="w-full p-3 mb-4  rounded-lg  transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-pink-200"
                // placeholder="Blog title(50 characters)"
              />
              <textarea
                // onChange={(e) => {
                //   setBlog(e.target.value);
                // }}
                defaultValue={blog}
                // placeholder=" Blog Content(5000 characters)"
                className="w-full p-3 mb-4 h-96  rounded-lg resize-none transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-pink-200"
              ></textarea>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="w-24 p-3 bg-pink-600 text-white rounded-lg transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-pink-700"
                >
                  POST
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
