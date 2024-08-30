import React, { useEffect, useState } from "react";
import { fetchUserBlogs } from "../../services/fetchUserBlogs";
import UserBlogCard from "./UserBlogCard";
// import axios from "axios";
// import EditBlog from "../../pages/EditBlog";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../exta/Loading";

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

  const handleDelete = async (blogId) => {
    console.log(blogId);
    const token = localStorage.getItem("token");
    if (window.confirm("deletion cant be undone. continue?")) {
      try {
        console.log("delete blog with id", blogId);
        await axios.delete(
          `http://localhost:3000/api/v1/blog/delete/${blogId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlogs(blogs.filter((blog) => blog._id !== blogId));
      } catch (err) {
        console.log("error while deletion: ", err);
        alert("Cannot delete blog at the moment. Please try again later.");
      }
    }
  };

  if (loading) return <Loading />;

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
