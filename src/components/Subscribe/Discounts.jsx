import React from "react";

const Discounts = () => {
  const coupons = [
    {
      id: 1,
      code: "FLASH25",
      discount: "25% OFF",
      title: "Flash Sale",
      description: "Quarter off on selected items",
      expiry: "Ends tomorrow",
      minOrder: "Min. $40",
      highlight: "bg-amber-100 border-amber-200 text-amber-800",
      button: "bg-amber-500 hover:bg-amber-600",
    },
    {
      id: 2,
      code: "SHIPFREE",
      discount: "FREE SHIPPING",
      title: "Delivery Deal",
      description: "No shipping fees on your order",
      expiry: "All week",
      minOrder: "Min. $75",
      highlight: "bg-blue-50 border-blue-100 text-blue-800",
      button: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: 3,
      code: "NEW15",
      discount: "15% OFF",
      title: "New Customer",
      description: "Special welcome discount",
      expiry: "First order only",
      minOrder: "Any amount",
      highlight: "bg-green-50 border-green-100 text-green-800",
      button: "bg-green-500 hover:bg-green-600",
    },
  ];

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    // Add toast notification here if needed
  };

  return (
    <div className="bg-[#f9f8f6] py-12 px-4">
      {" "}
      {/* Off-white background */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Current Offers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apply these codes at checkout for instant savings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className={`${coupon.highlight} border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md`}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-medium px-2 py-1 bg-white rounded shadow-sm">
                    {coupon.minOrder}
                  </span>
                  <span className="text-xs text-gray-500">{coupon.expiry}</span>
                </div>

                <h3 className="text-xl font-bold mb-1">{coupon.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {coupon.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-2 flex-grow">
                    <p className="font-mono text-center font-bold">
                      {coupon.code}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(coupon.code)}
                    className={`${coupon.button} text-white ml-3 px-4 py-2 rounded-md font-medium transition-colors`}
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className={`${coupon.button} py-2 text-center`}>
                <span className="text-white font-bold">{coupon.discount}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Discounts subject to terms. Cannot be combined with other offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
