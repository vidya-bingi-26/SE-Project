import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductsRow from "../components/ProductsRow";
import Filter from "../components/Filter";

function ProductPage() {
  const [filters, setFilters] = useState({
    categories: [],
    price: 1000,
    rating: 0,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 flex-shrink-0 sticky top-0 h-[calc(100vh-4rem)] overflow-y-auto">
          <Filter filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-1 overflow-x-hidden">
          <div className="p-4">
            <ProductsRow filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
