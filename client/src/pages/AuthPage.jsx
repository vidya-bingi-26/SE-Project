import React, { useState } from "react";
import Register from "../components/Register"; 
import Login from "../components/Login";

const AuthPage = () => {
  const [formType, setFormType] = useState("register");

  const handleSwitchForm = (type) => {
    setFormType(type);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {formType === "register" ? (
        <Register onSwitchForm={handleSwitchForm} />
      ) : (
        <Login onSwitchForm={handleSwitchForm} /> 
      )}
    </div>
  );
};

export default AuthPage;
