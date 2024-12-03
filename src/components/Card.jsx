import React from 'react'
import PropTypes from 'prop-types'

//Template for the product cards on the home page
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

Card.propTypes = {
  product: PropTypes.object.isRequired, 
  onClick: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}
export default Card
