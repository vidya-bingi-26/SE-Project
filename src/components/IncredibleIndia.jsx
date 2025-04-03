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
      }, 5000);
    }

    return () => {
      if (intervalId) clearTimeout(intervalId);
    };
  }, [isHovered, currentImageIndex, state.images.length]);

  return (
    <div
      className={`${state.colors} border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col flex-shrink-0 w-[350px] h-full`}
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
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            width: `${state.images.length * 100}%`,
            transition: "transform 4s ease-in-out",
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
      images: [`${rajasthan}?v=${new Date().getTime()}`],
      products:
        "Blue Pottery • Meenakari Jewelry • Bandhani Textiles • Kathputli Puppets",
      colors: "bg-amber-100 border-amber-200",
    },
    {
      id: 2,
      name: "Kashmir",
      images: [`${kashmir}?v=${new Date().getTime()}`],
      products:
        "Pashmina Shawls • Kashmiri Carpets • Paper Mache • Walnut Wood Carvings",
      colors: "bg-blue-50 border-blue-100",
    },
    {
      id: 3,
      name: "Rajasthan",
      images: [`${rajasthan}?v=${new Date().getTime()}`],
      products:
        "Blue Pottery • Meenakari Jewelry • Bandhani Textiles • Kathputli Puppets",
      colors: "bg-amber-100 border-amber-200",
    },
    {
      id: 4,
      name: "Kashmir",
      images: [`${kashmir}?v=${new Date().getTime()}`],
      products:
        "Pashmina Shawls • Kashmiri Carpets • Paper Mache • Walnut Wood Carvings",
      colors: "bg-blue-50 border-blue-100",
    },
    {
      id: 5,
      name: "Gujarat",
      images: [`${rajasthan}?v=${new Date().getTime()}`],
      products: "Patola Silk • Bandhani • Kutch Embroidery • Wooden Furniture",
      colors: "bg-green-50 border-green-100",
    },
    {
      id: 6,
      name: "Tamil Nadu",
      images: [`${kashmir}?v=${new Date().getTime()}`],
      products:
        "Tanjore Paintings • Kanchipuram Silk • Bronze Icons • Chettinad Pottery",
      colors: "bg-red-50 border-red-100",
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

        <div className="relative">
          <div className="flex space-x-6 pb-6 overflow-x-auto scrollbar-hide">
            {states.map((state) => (
              <StateCard
                key={state.id}
                state={state}
                hoveredState={hoveredState}
                setHoveredState={setHoveredState}
              />
            ))}
          </div>
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
