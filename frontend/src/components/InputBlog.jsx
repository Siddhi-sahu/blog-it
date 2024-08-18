import React from "react";

const InputBlog = () => {
  const handleSubmit = () => {};
  return (
    <form action="/createblog" method="POST" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center flex-col p-4 max-w-lg mx-auto lg:max-w-3xl 2xl:max-w-6xl">
        <input
          type="text"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          placeholder="Blog title(50 characters)"
        />
        <textarea
          placeholder=" Blog Content(5000 characters)"
          className="w-full p-3 mb-4 h-96 border border-gray-300 rounded-lg resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-24 p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
        >
          POST
        </button>
      </div>
    </form>
  );
};

export default InputBlog;
