import React from "react";

const UserBlogCard = ({ title, blog, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto mb-4 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{blog}</p>
    </div>
  );
};

export default UserBlogCard;
