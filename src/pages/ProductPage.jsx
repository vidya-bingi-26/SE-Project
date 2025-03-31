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
    <div className="w-screen fixed left-0 right-0">
      <Navbar />
      <div className="flex flex-row">
        <div className="h-screen w-64 sticky top-0">
          <Filter filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-grow">
          <ProductsRow />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
