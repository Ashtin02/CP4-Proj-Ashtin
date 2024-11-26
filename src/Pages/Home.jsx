import React, { useState, useEffect} from 'react'
import "../CSS/Home.css"
import Filter from "../components/Filter"
import ProductList from "../components/ProductList"
import ProductDetails from "../components/ProductDetails"
import SampleProducts from "../AllProducts"
import { getDatabase, ref, onValue, set } from "firebase/database";
import { database } from "../firebase"; // Your Firebase setup


const Home = () => {

  const [selectedFilter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});


  
  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = () => {
    setProducts(Object.values(SampleProducts))

    const productRef = ref(database, 'products');
    set(productRef, SampleProducts)
      .then(() => console.log("Products loaded to firebase"))
      .catch((error) =>
      console.error("Error inserting Products into firebase."))
  }

  //Filters the products using ternary operator
  const filteredProducts = selectedFilter === 'All' ? products : products.filter((product) => product.Category === selectedFilter);
  
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

