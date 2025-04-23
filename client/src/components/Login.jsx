import React from "react";
import { useState } from "react";
import BASE_URL from "../utils/api";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ onSwitchForm }) => {
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
  });
  
  const navigate=useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/users/login`, formData);
      console.log("Login successful:", res.data);
      alert("Login successful!");
      localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      navigate("/"); // Redirect to LandingPage
    } catch (error) {
      console.log("Login error full object:", error); 
      console.error(
        "Login error message:",
        error.response?.data?.message || error.message
      );
      alert(error.response?.data?.message || "Login failed.");
    }

  };


  return (
    <div className="form">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        name="loginId"
        placeholder="Username or Email"
        value={formData.loginId}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, loginId: e.target.value }))
        }
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />
      <button
        onClick={handleLogin}
        className="bg-[#722671] text-white p-2 rounded w-full hover:bg-[#5b1e5b]"
      >
        Login
      </button>
      <p className="mt-4">
        Don't have an account?{" "}
        <span
          onClick={() => onSwitchForm("register")}
          className="text-[#722671] cursor-pointer"
        >
          Register
        </span>
      </p>
      <p>
        <span
          onClick={() => onSwitchForm("forgotPassword")}
          className="text-[#722671] cursor-pointer"
        >
          Forgot Password?
        </span>
      </p>
    </div>
  );
};

export default Login;
