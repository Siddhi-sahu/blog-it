import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Loading from "../components/exta/Loading";

const EditBlog = () => {
  const { blogId } = useParams();
  //{blogId : "23kfnsk34rj3"}
  // console.log(blogId);

  const [title, setTitle] = useState("");

  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
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

        // console.log("Title:", title);
        // console.log("Blog:", blog);

        setTitle(title || ""); //undefined avoid krna hai isilye empty string
        setBlog(blog || "");

        setLoading(false);
      } catch (err) {
        console.log("user blog error", err);
        setError("Error fetching blog data");
        setLoading(false);
      }
    };
    getUserBlog();
  }, [blogId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:3000/api/v1/blog/update/blogs/${blogId}`,
        { title, blog },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess(true);
    } catch (err) {
      console.log(err);
      setError("Could not update blog at the moment, Error: ", err);
    }
  };
  useEffect(() => {
    if (success) {
      navigate("/dashboard");
    }
  }, [success, navigate]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
        <Sidebar />
        <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center flex-col p-4 max-w-lg mx-auto lg:max-w-3xl 2xl:max-w-6xl font-mono">
              {error && (
                <div className="text-red-500 font-semibold  mb-4">{error}</div>
              )}
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                type="text"
                className="w-full p-3 mb-4  rounded-lg  transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-pink-200"
              />
              <textarea
                onChange={(e) => {
                  setBlog(e.target.value);
                }}
                value={blog}
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
