import React from "react";

const InputBlog = () => {
  return (
    <div className="flex justify-center items-center flex-col p-4 max-w-lg mx-auto ">
      <input
        type="text"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        placeholder="Blog title(50 characters)"
      />
      <textarea
        placeholder=" Blog Content(5000 characters)"
        className="w-full p-3 mb-4 h-40 border border-gray-300 rounded-lg resize-none"
      ></textarea>
      <button className="w-full p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
        POST
      </button>
    </div>
  );
};

export default InputBlog;
