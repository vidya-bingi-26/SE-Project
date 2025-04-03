import React from "react";

function Filter({ filters, setFilters }) {
  const handleCheckboxChange = (category) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      categories: prevFilters.categories.includes(category)
        ? prevFilters.categories.filter((c) => c !== category)
        : [...prevFilters.categories, category],
    }));
  };

  const handlePriceChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: Number(e.target.value),
    }));
  };

  const handleClearFilters = () => {
    setFilters({ categories: [], price: 1000, rating: 0 });
  };

  const handleRatingChange = (rating) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: prevFilters.rating === rating ? 0 : rating,
    }));
  };

  return (
    <div className="w-64 p-4 bg-white border-r border-gray-200 shadow-md h-full">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <button
          className="text-red-500 hover:text-red-700 hover:underline"
          onClick={handleClearFilters}
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-md font-semibold">Category</h3>
        {["Men", "Women", "Kids", "Electronic Devices"].map((category) => (
          <div key={category} className="flex items-center">
            <input
              type="checkbox"
              id={category}
              checked={filters.categories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="mr-2"
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Price Range</h3>
        <p>${filters.price}</p>
        <input
          className="w-full"
          type="range"
          min="0"
          max="20000"
          value={filters.price}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between mx-2">
          <p className="text-gray-500 text-sm">$0</p>
          <p className="text-gray-500 text-sm">$20000</p>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h3 className="text-md font-semibold">Rating</h3>
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            onClick={() => handleRatingChange(rating)}
            className={`px-2 py-1 border rounded-md m-1 transition-colors ${
              filters.rating === rating
                ? "bg-blue-500 text-white border-blue-600"
                : "bg-gray-100 hover:bg-gray-300"
            }`}
          >
            {rating}★
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;