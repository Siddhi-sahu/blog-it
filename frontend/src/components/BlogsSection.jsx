import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { fetchBlogs } from "../services/fetchBlogs";
import { useNavigate } from "react-router-dom";
import Loading from "./exta/Loading";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setTimeout(async () => {
          const data = await fetchBlogs();
          setBlogs(data.blogs);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return <div> Failed to load blogs, please try again later: {error}</div>;
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      {/* <div className="p-6 grid gap-6 grid-cols-1"> */}
      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          title={blog.title.toUpperCase()}
          author={blog.author}
          overview={blog.blog.substring(0, 150) + "   ......read more"}
          onClick={() => {
            navigate(`/readblog/${blog._id}`);
          }}
        />
      ))}
    </div>
  );
};

export default BlogsSection;
