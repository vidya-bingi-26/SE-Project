import React from "react";
import Img1 from "../../assets/categories/womenEthnic.jpg";
import Img2 from "../../assets/categories/womenWestern.jpg";
import Img3 from "../../assets/categories/HomeAppliances.jpg";
import Img4 from "../../assets/categories/decoritems.jpg";
import Img5 from "../../assets/categories/makeup.jpg";
import Img6 from "../../assets/categories/agriculture.jpg";
import Img7 from "../../assets/categories/automotive.jpg";
import Img8 from "../../assets/categories/electronics.jpg";
import Img9 from "../../assets/categories/foodsAndBeverages.jpg";
import Img10 from "../../assets/categories/grocery.png";
import Img11 from "../../assets/categories/stationary.jpg";
import Img12 from "../../assets/categories/toys.jpg";
import Img13 from "../../assets/categories/health.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Home Appliances",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Home Decor",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Makeup & Skincare",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Agricultural Products",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Auto Components And accessories",
    aosDelay: "1000",
  },
  {
    id: 8,
    img: Img8,
    title: "Electronics",
    aosDelay: "1000",
  },
  {
    id: 9,
    img: Img9,
    title: "Food and Beverages",
    aosDelay: "1000",
  },
  {
    id: 10,
    img: Img10,
    title: "Grocery",
    aosDelay: "1000",
  },
  {
    id: 11,
    img: Img11,
    title: "Books & Stationary",
    aosDelay: "1000",
  },
  {
    id: 12,
    img: Img12,
    title: "Toys & Games",
    aosDelay: "1000",
  },
  {
    id: 13,
    img: Img13,
    title: "Health & wellness",
    aosDelay: "1000",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Major Categories curated for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Categories
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Shopsy provides a wide range of products from daily trendy outfits
            to smart devices, luxury items, etc.
          </p>
        </div>

        {/* Horizontal Scrollable Categories */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto scrollbar-hide px-4 pb-4 cursor-pointer">
            {ProductsData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="flex flex-col items-center space-y-2 min-w-[150px]"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[200px] w-[150px] object-cover rounded-md"
                />
                <h3 className="text-sm font-semibold">{data.title}</h3>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Products;
