import axios from "axios";

const BLOG_URL = "http://localhost:3000/api/v1/user/bulk/blogs";

const fetchBlogs = async () => {
  try {
    const response = await axios.get(BLOG_URL);
    return response.data;
  } catch (err) {
    console.log("Error fetching blogs : ", err);
    throw err;
  }
};
