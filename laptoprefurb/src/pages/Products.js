import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiLoader } from "react-icons/fi";
import Card from "../components/Card";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);
  const [filter, setFilter] = useState("all"); // Default filter: all

  const filteredData = data?.filter((product) => {
    if (filter === "all") {
      return true; // Show all products
    } else if (filter === "new") {
      return product.description.toLowerCase().includes("new");
    } else if (filter === "refurbished") {
      return product.description.toLowerCase().includes("refurbished");
    }
    return true;
  });

  return (
    <div className="product-section container mx-auto px-10 py-10 ">
      <h2 className="section-title uppercase font-bold space-font  text-2xl mb-10 text-center tracking-wider ">
        Browse All Products
      </h2>

      {/* Filter Section */}
      <div className="filter-section mb-6 flex items-center">
  <span className="mr-4 text-lg font-semibold">Filter:</span>
  <label className="mr-4 cursor-pointer">
    <input
      type="radio"
      name="filter"
      value="all"
      checked={filter === "all"}
      onChange={() => setFilter("all")}
    />
    <span className="ml-2">All</span>
  </label>
  <label className="mr-4 cursor-pointer">
    <input
      type="radio"
      name="filter"
      value="new"
      checked={filter === "new"}
      onChange={() => setFilter("new")}
    />
    <span className="ml-2">New</span>
  </label>
  <label className="cursor-pointer">
    <input
      type="radio"
      name="filter"
      value="refurbished"
      checked={filter === "refurbished"}
      onChange={() => setFilter("refurbished")}
    />
    <span className="ml-2">Refurbished</span>
  </label>
</div>

      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {status && (
          <span className="loader text-center col-span-full">
            <FiLoader className="inline-block animate-spin" />
          </span>
        )}

        {filteredData?.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
