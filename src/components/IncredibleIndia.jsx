import React, { useState, useEffect } from "react";
import rajasthan from "../assets/landingpage/rajasthan.jpeg";
import kashmir from "../assets/landingpage/kashmir.jpg";

const StateCard = ({ state, hoveredState, setHoveredState }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isHovered && state.images.length > 1) {
      intervalId = setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % state.images.length
        );
      }, 5000); // Increased from 2500 to 3500ms (3.5 seconds)
    }

    return () => {
      if (intervalId) clearTimeout(intervalId);
    };
  }, [isHovered, currentImageIndex, state.images.length]);

  return (
    <div
      className={`${state.colors} border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col`}
      onMouseEnter={() => {
        setHoveredState(state.id);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setHoveredState(null);
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
    >
      <div className="relative w-full pt-[56.25%]">
        {" "}
        {/* 16:9 Aspect Ratio Container */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            width: `${state.images.length * 100}%`,
            transition: "transform 4s ease-in-out", // Changed duration to 1s and added ease-in-out
          }}
        >
          {state.images.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-full absolute top-0 left-0 inline-block"
              style={{
                width: `${100 / state.images.length}%`,
                left: `${(idx * 100) / state.images.length}%`,
              }}
            >
              <img
                src={img}
                alt={`${state.name} craft ${idx + 1}`}
                className="w-full h-full object-cover"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  minWidth: "100%",
                  minHeight: "100%",
                }}
                loading="lazy"
              />
              {idx === 0 && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-serif">
                    {state.name}
                  </h3>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 flex-grow">
        <p className="text-gray-700 text-base leading-relaxed">
          {state.products}
        </p>
      </div>
    </div>
  );
};

const IncredibleIndia = () => {
  const [hoveredState, setHoveredState] = useState(null);

  const states = [
    {
      id: 1,
      name: "Rajasthan",
      images: [
        `${rajasthan}?v=${new Date().getTime()}`,
        "https://images.unsplash.com/photo-1586023492129-3d6667e7a1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      products:
        "Blue Pottery • Meenakari Jewelry • Bandhani Textiles • Kathputli Puppets",
      colors: "bg-amber-100 border-amber-200",
    },
    {
      id: 2,
      name: "Kashmir",
      images: [
        `${kashmir}?v=${new Date().getTime()}`,
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      ],
      products:
        "Pashmina Shawls • Kashmiri Carpets • Paper Mache • Walnut Wood Carvings",
      colors: "bg-blue-50 border-blue-100",
    },
  ];

  return (
    <div className="bg-[#fffaf5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 font-serif">
            Incredible India
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the rich heritage of Indian states through their exquisite
            handicrafts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {states.map((state) => (
            <StateCard
              key={state.id}
              state={state}
              hoveredState={hoveredState}
              setHoveredState={setHoveredState}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            View All States & Crafts
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncredibleIndia;
