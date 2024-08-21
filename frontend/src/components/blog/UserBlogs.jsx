import React, { useEffect, useState } from "react";
import { fetchUserBlogs } from "../../services/fetchUserBlogs";
import UserBlogCard from "./UserBlogCard";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //handle errors from here

  useEffect(() => {
    try {
      const fetchUserData = async () => {
        const data = await fetchUserBlogs();

        setBlogs(data.blogs);
      };
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    fetchUserData();
  }, [data]);

  if (loading) return <div>loading...</div>;

  if (error) {
    return <div>Error fetching your blogs, Error : {error}</div>;
  }

  return (
    <div className="">
      {blogs.map((blog) => {
        return (
          <UserBlogCard
            title={blog.title}
            blog={blog.blog}
            onEdit={() => handleEdit}
            onDelete={() => handleDelete}
          />
        );
      })}
    </div>
  );
};

export default UserBlogs;
