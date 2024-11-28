import React from 'react'
import "../CSS/Home.css"

const Card = ({ product, onClick, remove }) => {
  return (
    <div className="ProductCard">
      <img src={product.image} alt=" Image coming soon" />
      <h3>{product.name}</h3>
      <p>${product.Price}</p>
      <button onClick={onClick}>View More</button>
      <button  onClick={remove}>Delete Product</button>
    </div>
  )
}

export default Card
