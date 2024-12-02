import React from 'react';
import Card from "./Card"
import "../CSS/Home.css"
import PropTypes from 'prop-types';

//Component that holds all the product cards and maps themout with the name as the key
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

ProductList.propTypes = {
  products: PropTypes.array, 
  onClick: PropTypes.func, 
  remove: PropTypes.func
}

export default ProductList;
