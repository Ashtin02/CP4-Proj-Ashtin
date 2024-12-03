import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

//Component that holds the details of each product dependant on which is selected 
//And Logic for confirmation of purchase
const ProductDetails = ({ product }) => {

  const [confirmation, setConfirmation] = useState(false)


  const handleClick = () => {
    setConfirmation(true);
  }

  const confirmClick = () => {
    alert("Purchase successful, pick up will be ready at The Phone Booth in 2 hours!")
    setConfirmation(false)
  }

  const cancelClick = () => {
    setConfirmation(false);
  }

//If confirmation is true reload component with buttons to ocnfirm 
  if (confirmation) {
    return (
      <div className="ProductDetail">
        <img src={product.image} alt="product Image" />
        <h2>{product.name}</h2>
        <p>{product.Desc}</p>
        <p>${product.Price}</p>
        <p>Please click confirm to purchase the product. </p>
        <button onClick={cancelClick}>Cancel</button>
        <button onClick={confirmClick}>Confirm</button>

      </div>
    )
  //If confirmation is false revert back to original product detail
  } else {
    return (
      <div className="ProductDetail">
        <img src={product.image} alt="Image coming soon" />
        <h2>{product.name}</h2>
        <p>{product.Desc}</p>
        <p>${product.Price}</p>
        <button onClick={handleClick}>Buy Now</button>
      </div>
    )
  }
}

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductDetails;
