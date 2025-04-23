import React from "react";

const ForgotPassword = ({ onSwitchForm }) => {
  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log("Sending reset link...");
  };

  return (
    <div className="form">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />
      <button
        onClick={handleForgotPassword}
        className="bg-[#722671] text-white p-2 rounded w-full hover:bg-[#5b1e5b]"
      >
        Send Reset Link
      </button>
      <p className="mt-4">
        <span
          onClick={() => onSwitchForm("login")}
          className="text-[#722671] cursor-pointer"
        >
          Back to Login
        </span>
      </p>
    </div>
  );
};

export default ForgotPassword;
