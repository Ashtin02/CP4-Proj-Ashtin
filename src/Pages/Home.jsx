import React, { useState, useEffect} from 'react'
import "../CSS/Home.css"
import Filter from "../components/Filter"
import ProductList from "../components/ProductList"
import ProductDetails from "../components/ProductDetails"
import SampleProducts from "../AllProducts"
import { getDatabase, ref, onValue, set } from "firebase/database";
import { database } from "../firebase";
import AddProductForm from "../components/AddProductForm"


const Home = () => {

  const [selectedFilter, setFilter] = useState("All");
  const [products, setProducts] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});


  
  useEffect(() => {
    loadProducts();
  }, [])

  const loadProducts = () => {
    setProducts(SampleProducts)

    const productRef = ref(database, 'products');
    set(productRef, SampleProducts)
      .then(() => console.log("Products loaded to firebase"))
      .catch((error) =>
      console.error("Error inserting Products into firebase."))
  }

  //Filters the products using ternary operator
  const filteredProducts = selectedFilter === 'All' ? Object.values(products) : Object.values(products).filter((product) => product.Category === selectedFilter);
  
  const handleClick = (product) => {
    setSelectedProduct(product);
  }

  const addProduct = (product) => {
    const newProducts = { ...products };
    newProducts[product.name] = product;
    setProducts(newProducts);

    const productsRef = ref(database, 'products')
    set(productsRef, newProducts)
      .then(console.log("Product added to firebase."))
      .catch((error) => console.error('Error when adding product:',error))
  }

  const removeProduct = (key) => {
    const updatedProducts = { ...products };
    delete updatedProducts[key];
    setProducts(updatedProducts);

    const productsRef = ref(database, 'products')
    set(productsRef, updatedProducts)
      .then(console.log("Product deleted from firebase."))
      .catch((error) => console.error('Error when deleting product:',error))

  }

  return (
    <div className="HomeContainer">

      <Filter onFilterChange={setFilter} />
      <div className="ListWithAddForm">
        <ProductList products={filteredProducts} onClick={handleClick} remove={removeProduct} />
        <AddProductForm addProduct={addProduct} />
      </div>
      <ProductDetails product={selectedProduct} />

    </div>
  )
}

export default Home

