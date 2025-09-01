// src/App.jsx
import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6 text-indigo-700">
        Product Showcase
      </h1>
      <ProductList />
    </div>
  );
}

export default App;
