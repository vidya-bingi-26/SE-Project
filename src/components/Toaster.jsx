// src/components/Toaster.js
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Toaster = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-green-500 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2 animate-fade-in">
        <FaCheckCircle className="text-xl" />
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toaster;
