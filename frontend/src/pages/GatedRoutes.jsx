import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GatedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  //problem was it was rendering
  if (!token) {
    return null;
  }
  return children;
};

export default GatedRoutes;
