import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { Navigate, useNavigate } from "react-router-dom";
import BASE_URL from "../../utils/api";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    category: "Women Ethnic",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    category: "Women Western",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Home Appliances",
    category: "Home Appliances",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Home Decor",
    category: "Home Decor",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Makeup & Skincare",
    category: "Makeup & Skincare",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Agricultural Products",
    category: "Agricultural Products",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "Auto Components And accessories",
    category: "Auto Components",
    aosDelay: "1000",
  },
  {
    id: 8,
    img: Img8,
    title: "Electronics",
    category: "Electronics",
    aosDelay: "1000",
  },
  {
    id: 9,
    img: Img9,
    title: "Food and Beverages",
    category: "Food and Beverages",
    aosDelay: "1000",
  },
  {
    id: 10,
    img: Img10,
    title: "Grocery",
    category: "Grocery",
    aosDelay: "1000",
  },
  {
    id: 11,
    img: Img11,
    title: "Books & Stationary",
    category: "Books & Stationary",
    aosDelay: "1000",
  },
  {
    id: 12,
    img: Img12,
    title: "Toys & Games",
    category: "Toys & Games",
    aosDelay: "1000",
  },
  {
    id: 13,
    img: Img13,
    title: "Health & wellness",
    category: "Health & wellness",
    aosDelay: "1000",
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(""); // To store selected category
  const [products, setProducts] = useState([]); // To store all products

  // Fetch all products from the backend
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/products`) // Replace with your backend URL
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const encodedCategory = encodeURIComponent(category);
    navigate(`/category/${encodedCategory}`);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

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
                onClick={() => handleCategoryClick(data.title)} // Set the category when clicked
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

        {/* Display filtered products */}
        <div className="mt-8 grid grid-cols-3 gap-8">
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="flex flex-col items-center space-y-2">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-[200px] w-[150px] object-cover rounded-md"
                />
                <h3 className="text-sm font-semibold">{product.title}</h3>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
