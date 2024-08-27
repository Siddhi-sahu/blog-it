import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handle

  return (
    <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
        <Navbar />
        <div className="flex justify-center mt-10">
          <input
            type="text"
            placeholder="Search for blog posts..."
            value={query}
            onChange={handleInputChange}
            className="w-full md:w-2/3 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-r-lg" onClick={handleSearch}>
            Search ideas
          </button>

          {loading && <div>loading...</div>}
          {error && <p className="text-red-500">{error}</p>}

          <ul>
            {results.map((blog) => (
              <li key={blog._id}>{blog.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
