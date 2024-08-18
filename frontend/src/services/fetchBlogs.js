import axios from "axios";

const BLOG_URL = "http://localhost:3000/api/v1/blog/bulk/blogs";

export const fetchBlogs = async () => {
  try {
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(BLOG_URL, header);
    return response.data;
  } catch (err) {
    console.log("Error fetching blogs : ", err);
    throw err;
  }
};
