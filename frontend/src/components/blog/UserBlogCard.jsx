import React from "react";

const UserBlogCard = ({ title, blog, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mt-8  mx-auto mb-4 p-4 sm:p-6 hover:bg-pink-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl min-h-72">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">{title.toUpperCase()}</h2>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <button
            onClick={onEdit}
            className="bg-pink-500 text-white py-1 px-3  text-sm sm:text-base rounded hover:bg-pink-600"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white py-1 px-3  text-sm sm:text-base rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm sm:text-base">{blog}</p>
    </div>
  );
};

export default UserBlogCard;
