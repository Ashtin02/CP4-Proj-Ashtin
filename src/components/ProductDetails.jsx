import React, { useState, useEffect } from 'react';
import "../CSS/Home.css"

const ProductDetails = ({ product }) => {


  return (
    <div className="ProductDetail">
      <img src={product.image} alt="product Image" />
      <h2>{product.name}</h2>
      <p>{product.Desc}</p>
      <p>${product.Price}</p>
      <button>Buy Now</button>
    </div>
  )
}

export default ProductDetails
