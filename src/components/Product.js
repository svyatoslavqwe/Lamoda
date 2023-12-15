import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
      </div>
      <div className="product-info">
        <p>Color: {product.color}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default Product;
