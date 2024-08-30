import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-pink-200">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-6 text-green-600">
          Blog Posted Successfully!
        </h1>
        <p className="mb-6">
          Your blog has been posted. You can now view it or go back to the blog
          list.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/dashboard")}
        >
          Go to Blogs
        </button>
      </div>
    </div>
  );
};

export default Success;
