// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-md"
    />
    <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
    <p className="text-gray-600 text-sm">{product.description}</p>
    <div className="mt-3 flex justify-between items-center">
      <span className="text-indigo-600 font-bold">{product.price}</span>
      <button className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600">
        Buy
      </button>
    </div>
  </div>
);

export default ProductCard;
