import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductsRow from "../components/ProductsRow";
import Filter from "../components/Filter";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { categoryName } = useParams();
  const [filters, setFilters] = useState({
    categories: categoryName ? [categoryName] : [],
    price: 1000,
    rating: 0,
  });
  const [products, setProducts] = useState([]);

  // Fetch products based on filters
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products", {
          params: {
            categories: filters.categories.join(","),
            price: filters.price,
            rating: filters.rating,
          },
        });
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [filters]);

  useEffect(() => {
    if (categoryName) {
      setFilters((prev) => ({ ...prev, categories: [categoryName] }));
    }
  }, [categoryName]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 flex-shrink-0 sticky top-0 h-[calc(100vh-4rem)] overflow-y-auto">
          <Filter filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-1 overflow-x-hidden">
          <div className="p-4">
            <ProductsRow products={products} filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
