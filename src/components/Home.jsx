import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation(); // Data received via navigation
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // Set data in localStorage and state when component mounts
  useEffect(() => {
    // Check if location state has data
    if (location.state && location.state.email && location.state.password) {
      const { email, password } = location.state;
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setUserData({ email, password });
    } else {
      // Fetch from localStorage if location.state is empty
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      if (email && password) {
        setUserData({ email, password });
      }
    }
  }, [location]);

  return (
    <div className="w-[100%] h-[100vh] bg-gray-200 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to Home Page</h1>
      {userData.email && userData.password ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-lg font-medium mb-2">
            <span className="font-bold">Email:</span> {userData.email}
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Password:</span> {userData.password}
          </p>
        </div>
      ) : (
        <p className="text-lg font-medium">No user data available</p>
      )}
    </div>
  );
};

export default Home;
