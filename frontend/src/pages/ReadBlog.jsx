import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
// import InputBlog from "../components/InputBlog";
// import BlogCard from "../components/BlogCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3000/api/v1/blog/readblog/${blogId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlog(response.data.blog);

        setError("");
        setLoading(false);
      } catch (err) {
        console.log("error fetching specific blog", err);
        setError("Something went wrong. please try again later");
        setLoading(false);
      }
    };

    getBlogData();
  }, [blogId]);

  if (loading) return <div>loading...</div>;
  if (error)
    return (
      <div className="text-red-500 text-3xl font-semibold  mb-4 flex items-center justify-center">
        {" "}
        {error}
      </div>
    );
  return (
    <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
        {error && (
          <div className="text-red-500 font-semibold  mb-4">{error}</div>
        )}
        <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          {<h1 className="text-3xl font-bold mb-4">{blog.title}</h1>}
          <p className="text-sm text-gray-600 mb-8">
            By{" "}
            {blog.author
              ? blog.author.firstName + " " + blog.author.lastName
              : "Unknown Author"}
          </p>
          <div className="text-lg text-gray-800 leading-relaxed">
            {blog.blog}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
