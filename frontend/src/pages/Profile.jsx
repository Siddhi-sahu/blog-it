import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import profileIcon from "../assets/profile.svg";
import Loading from "../components/exta/Loading";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (err) {
        console.log(err);
        setError("Failed to load user profile");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-5 md:grid-cols-12 h-screen">
      <Sidebar />
      <div className="col-span-4 md:col-span-10 bg-pink-100 p-6 overflow-y-auto">
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="text-red-500 text-center font-bold text-2xl">
            {error}
          </div>
        ) : (
          user && (
            <div className="flex flex-col items-center max-w-3xl mx-auto bg-pink-200 p-8 rounded-lg shadow-lg">
              <div className="mb-6 flex flex-col items-center">
                <img
                  src={profileIcon}
                  alt="Profile"
                  className="w-16 h-16 rounded-full  bg-pink-500 mb-4"
                />
                <h1 className="text-3xl font-semibold mb-2">{`${user.firstName} ${user.lastName}`}</h1>
                <p className="text-lg text-gray-600">{user.username}</p>
              </div>
              <div className="bg-pink-100 p-4 rounded-lg shadow-md w-full">
                <h2 className="text-xl font-semibold mb-2">About</h2>
                <p className="text-gray-700">
                  This section is for additional user details or bio. Currently,
                  we do not have a bio field.
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Profile;
