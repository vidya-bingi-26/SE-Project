import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "../utils/api.js";




const Register = ({ onSwitchForm }) => {
  // Store input values in state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle registration
  const handleRegister = async () => {
    const password = formData.password;

    // ✅ Password validation before API call
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include at least one number and one special character."
      );
      return;
    }
    
    try {
      const res = await axios.post(`${BASE_URL}/api/users/register`, formData);
      console.log("Registered successfully:", res.data);
      alert("Registration successful!");
      // Optionally store token: localStorage.setItem("token", res.data.token);
      // Switch to login form
      onSwitchForm("login");
    } catch (error) {
      console.error("Registration error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="form">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />

      <button
        onClick={handleRegister}
        className="bg-[#722671] text-white p-2 rounded w-full hover:bg-[#5b1e5b]"
      >
        Register
      </button>

      <p className="mt-4">
        Already have an account?{" "}
        <span
          onClick={() => onSwitchForm("login")}
          className="text-[#722671] cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
