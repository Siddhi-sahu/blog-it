import React, { useEffect, useState } from "react";
import { fetchUserBlogs } from "../../services/fetchUserBlogs";
import UserBlogCard from "./UserBlogCard";
// import axios from "axios";
// import EditBlog from "../../pages/EditBlog";
import { useNavigate } from "react-router-dom";

const UserBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //handle errors from here

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchUserBlogs();

        setBlogs(data.blogs);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = async (blogId) => {
    navigate(`/edit/${blogId}`); //: was causing the trouble
  };

  const handleDelete = (blogId) => {
    console.log("delete blog with id", blogId);
  };

  if (loading) return <div>loading...</div>;

  if (error) {
    return <div>Error fetching your blogs, Error : {error}</div>;
  }

  return (
    <div className="">
      {/* users blogs these are different from the bulk blogs */}
      {blogs.map((blog) => {
        // console.log("Rendering blog:", blog);
        return (
          <UserBlogCard
            title={blog.title}
            blog={blog.blog}
            onEdit={() => handleEdit(blog._id)}
            onDelete={() => handleDelete(blog._id)}
            key={blog._id}
          />
        );
      })}
    </div>
  );
};

export default UserBlogs;
