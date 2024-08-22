import axios from "axios";

const userBlogs_URL = "http://localhost:3000/api/v1/user/userBlogs";

export const fetchUserBlogs = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log(" no token found");
      //render error page
      throw err;
    }
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(userBlogs_URL, header);
    // console.log(response.data.blogs);

    return response.data;
  } catch (err) {
    console.log("Error fetching blogs : ", err);
    throw err;
  }
};
