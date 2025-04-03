import React, { useState } from "react";

const deliveryData = {
  411001: { deliveryAvailable: true, estimatedDays: 3 },
  560001: { deliveryAvailable: true, estimatedDays: 5 },
  110001: { deliveryAvailable: false, estimatedDays: null },
};

const Delivery = () => {
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      // Allows only 6-digit numbers
      setPincode(value);

      if (value.length === 6) {
        checkDelivery(value);
      }
    }
  };

  const checkDelivery = (pincode) => {
    const deliveryInfo = deliveryData[pincode];

    if (deliveryInfo && deliveryInfo.deliveryAvailable) {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + deliveryInfo.estimatedDays);

      setMessage(`🚚 Delivery expected by ${deliveryDate.toDateString()}`);
    } else {
      setMessage(`❌ Sorry, we don't deliver to ${pincode}.`);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full max-w-md">
      <label className="block text-gray-700 text-lg font-semibold mb-2">
        Enter Pincode:
      </label>
      <input
        type="text"
        value={pincode}
        onChange={handlePincodeChange}
        placeholder="Enter 6-digit pincode"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      {message && (
        <p
          className={`mt-3 text-lg ${
            message.includes("❌") ? "text-red-600" : "text-gray-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Delivery;
