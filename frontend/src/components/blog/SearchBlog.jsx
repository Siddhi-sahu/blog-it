import React from "react";

const SearchBlog = ({ blog, onClick }) => {
  return (
    <div
      key={blog._id}
      className="bg-white p-4 rounded-lg shadow mb-4"
      onClick={onClick}
    >
      <h2 className="font-semibold">{blog.title.toUpperCase()}</h2>
      <p className="text-pink-800">
        By {blog.author.firstName} {blog.author.lastName}
      </p>
      <p className="text-gray-800">{blog.blog}</p>
    </div>
  );
};

export default SearchBlog;
