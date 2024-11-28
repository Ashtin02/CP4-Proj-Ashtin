import React from 'react';
import Card from "./Card"
import "../CSS/Home.css"

const ProductList = ({ products,onClick, remove }) => {
  if (products.length > 0) {
    return (
      <div className="ProductListContainer">
        {products.map((product) => (
          <Card key={product.name} product={product} onClick={() => onClick(product)} remove={() => remove(product.name)} />
        ))}
      </div>
    )
  } else {
    return (
      <p>No Products Available.</p>
    )
  }
};

export default ProductList;
