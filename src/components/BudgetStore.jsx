import React from 'react'

function BudgetStore() {
    const priceCategories = [99, 199, 299, 399];
  return (
    <>
      <div className='flex flex-col m-8 text-center'>
        <p className='mx-auto mb-2 text-lg font-bold'>Best Deals Under Every Budget! 💰✨</p>
        <div className="flex gap-16 justify-center">
          {priceCategories.map((price, index) => (
            <div
              key={index}
              className="bg-pink-200 border border-pink-500 text-pink-500 rounded-full font-medium w-20 h-20 flex flex-col items-center justify-center text-sm text-center leading-tight"
            >
              Under <br /> {price}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BudgetStore