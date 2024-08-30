import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";
import Loading from "../components/exta/Loading";
import SearchBlog from "../components/blog/SearchBlog";
import { useNavigate } from "react-router-dom";
//improve styling
const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === "") {
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
    };
    const timeoutId = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  ///readblog/:blogId"

  const handleClick = (blogId) => {
    navigate(`/readblog/${blogId}`);
  };

  return (
    <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
        <Navbar />
        <div className="flex flex-col items-center mt-10">
          <div className="w-full md:w-2/3 flex">
            <input
              type="text"
              placeholder="Search for blog posts..."
              value={query}
              onChange={handleInputChange}
              className="w-full md:w-2/3 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 m-2 rounded-lg">
              Search ideas
            </button>
          </div>

          {loading && <Loading />}
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}

          <div className="mt-8 w-full md:w-2/3">
            {results.length > 0
              ? results.map((blog) => (
                  <SearchBlog
                    blog={blog}
                    key={blog._id}
                    onClick={() => handleClick(blog._id)}
                  />
                ))
              : !loading && (
                  <div className="text-left text-gray-600 m-4 text-xl">
                    No Matching Results{":("}
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
