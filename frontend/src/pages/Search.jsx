import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length === 0) {
        setResults([]);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/api/v1/blog/search",
          {
            params: { q: query },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setResults(response.data.blogs);
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }

      const timeoutId = setTimeout(() => {
        fetchResults();
      }, [300]);
    };

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

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
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-r-lg"
            onClick={handleSearch}
          >
            Search ideas
          </button>

          {loading && <div className="mt-8 text-center">loading...</div>}
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}

          <div className="mt-8">
            {results.length > 0
              ? results.map((blog) => (
                  <div key={blog._id}>
                    <h2>{blog.title}</h2>
                    <p>
                      By {blog.author.firstName} {blog.author.lastName}
                    </p>
                    <p>{blog.blog}</p>
                  </div>
                ))
              : !loading && <div>No Matching Results{":("}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
