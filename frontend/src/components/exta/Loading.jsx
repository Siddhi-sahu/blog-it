import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-pink-700 border-opacity-75"></div>
    </div>
  );
};

export default Loading;
