import React, { useState } from "react";
import ReviewSection from "./ReviewSection";
import Delivery from "./DeliveryComponent";

const TabSection = ({ product }) => {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <section className="mt-[48px]">
      <div className="flex gap-[24px] border-b border-[#E2E8F0]">
        <button onClick={() => setActiveTab("reviews")}>Reviews</button>
        <button onClick={() => setActiveTab("description")}>Description</button>
        <button onClick={() => setActiveTab("delivery")}>Delivery</button>
      </div>

      <div className="mt-[24px]">
        {activeTab === "reviews" && <ReviewSection />}
        {activeTab === "description" && (
          <div className="p-[24px] bg-white shadow-md rounded-md">
            <p>{product.description}</p>
          </div>
        )}
        {activeTab === "delivery" && <Delivery />}
      </div>
    </section>
  );
};

export default TabSection;
