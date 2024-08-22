import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { fetchBlogs } from "../services/fetchBlogs";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data.blogs);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  if (loading) return <div>loading...</div>;
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
        />
      ))}
    </div>
  );
};

export default BlogsSection;
