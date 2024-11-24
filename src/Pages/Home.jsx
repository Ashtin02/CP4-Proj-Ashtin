import React, { useState, useEffect} from 'react'
import "../CSS/Home.css"
import Filter from "../components/Filter"
import ProductList from "../components/ProductList"
import ProductDetails from "../components/ProductDetails"
import SampleProducts from "../AllProducts"


const Home = () => {

  const [selectedFilter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    setProducts(Object.values(SampleProducts));
  }, [])

  //Filters the products using ternary operator
  const filteredProducts = selectedFilter === 'All' ? products : products.filter(product => product.Category === selectedFilter);
  
  const handleClick = (product) => {
    setSelectedProduct(product);
  }

  return (
    <div className="HomeContainer">
      <Filter onFilterChange = {setFilter} />
      <ProductList products={filteredProducts} onClick={handleClick} />
      <ProductDetails product={selectedProduct} />

    </div>
  )
}

export default Home

