import React from "react";

const BlogCard = ({ author, title, overview }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto mb-4">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className="w-10 h-10 rounded-full mr-4"
          />
          <h3 className="text-lg font-semibold">{author}</h3>
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{overview}</p>
      </div>
      <div className="bg-pink-100 p-4">
        <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
