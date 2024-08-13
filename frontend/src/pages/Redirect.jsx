import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          //send the token for verification to the backend?
          const response = await axios.get(
            "http://localhost:3000/api/v1/user/dashboard",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 200) {
            navigate("/dashboard");
          } else {
            navigate("/signin");
          }
        } catch (err) {
          console.log("token verification error ", err);
          navigate("/signin");
        }
      } else {
        navigate("/signin");
      }
    };
    checkToken();
  }, [navigate]);

  return null;
};

export default Redirect;
