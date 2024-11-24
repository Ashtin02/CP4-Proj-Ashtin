import React from 'react'
import "../CSS/Home.css"

const Card = ({ product, onClick }) => {
  return (
    <div className="ProductCard">
      <img src={product.image} alt="product Image" />
      <h3>{product.name}</h3>
      <p>${product.Price}</p>
      <button onClick={onClick}>View More</button>
    </div>
  )
}

export default Card
