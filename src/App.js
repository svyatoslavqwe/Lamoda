import React, { useState } from "react";
import GenerateRandomProduct from "./components/GenerateRandomProduct";
import Product from "./components/Product";
import Filter from "./components/Filter";
import "./style.css";

const App = () => {
  const [products] = useState(
    Array.from({ length: 8 }, () => GenerateRandomProduct())
  );

  const filters = {
    searchQuery: {
      type: "search",
      label: "Search",
      initialValue: "",
      fn: (product, value) =>
        product.name.toLowerCase().includes(value.toLowerCase()),
    },
    colors: {
      type: "multiselect",
      label: "Colors",
      options: ["Black", "Red", "White", "Blue"],
      initialValue: [],
      fn: (product, values) => values.includes(product.color),
    },
    categories: {
      type: "multiselect",
      label: "Categories",
      options: ["Jeans", "T-Shirts", "Hoodies", "Shoes"],
      initialValue: [],
      fn: (product, values) => values.includes(product.category),
    },
  };

  const [filterValues, setFilterValues] = useState({});

  const handleFilterChange = (filterName, value) => {
    setFilterValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        [filterName]: value,
      };

      if (
        Array.isArray(updatedValues[filterName]) &&
        updatedValues[filterName].length === 0
      ) {
        delete updatedValues[filterName];
      }

      return updatedValues;
    });
  };

  const filteredProducts = products.filter((product) => {
    return Object.entries(filterValues).every(([filterName, value]) => {
      const filter = filters[filterName];
      return filter.fn(product, value);
    });
  });

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      <div className="filters">
        {Object.entries(filters).map(([filterName, filterConfig]) => (
          <Filter
            key={filterName}
            filterName={filterName}
            filterConfig={filterConfig}
            filterValues={filterValues}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
