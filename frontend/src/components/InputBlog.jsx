import React, { useState } from "react";
import axios from "axios";

const InputBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/api/v1/blog/createblog",
        {
          title,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  if (error) {
    return <div>Error. Please try again later</div>;
  }
  return (
    <form action="/createblog" method="POST" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center flex-col p-4 max-w-lg mx-auto lg:max-w-3xl 2xl:max-w-6xl">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="w-full p-3 mb-4  rounded-lg  transform transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-pink-200"
          placeholder="Blog title(50 characters)"
        />
        <textarea
          onChange={(e) => {
            setBody(e.target.body);
          }}
          placeholder=" Blog Content(5000 characters)"
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
  );
};

export default InputBlog;
