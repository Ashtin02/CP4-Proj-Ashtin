import React, { useState, useEffect} from 'react'
import "../CSS/Home.css"
import "../CSS/Header.css"
import Filter from "../components/Filter"
import ProductList from "../components/ProductList"
import ProductDetails from "../components/ProductDetails"
import SampleProducts from "../AllProducts"
import { ref, set } from "firebase/database";
import { database } from "../firebase";
import AddProductForm from "../components/AddProductForm"

//Home page holding most of the logic and the components
const Home = () => {

  const [selectedFilter, setFilter] = useState("All");
  const [products, setProducts] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});




//Loads product on the page load.
  useEffect(() => {
    loadProducts();
  }, [])

  //Sets product state as sample products and then loads the sample products into the firebase real time database
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
  
  //handles the click for view More in product cards 
  const handleClick = (product) => {
    setSelectedProduct(product);
  }

  /**
   * Adds the given product to the list of products and real time database
   * Can also edit existing products by inputting the name since that is the key
   * @param {Object} product 
   */
  const addProduct = (product) => {
    const newProducts = { ...products };
    newProducts[product.name] = product;
    setProducts(newProducts);

    const productsRef = ref(database, 'products')
    set(productsRef, newProducts)
      .then(console.log("Product added to firebase."))
      .catch((error) => console.error('Error when adding product:',error))
  }

  /**
   * Removes the product from both the internal product list and the real time database
   * @param {product Name} key 
   */
  const removeProduct = (key) => {
    const updatedProducts = { ...products };
    delete updatedProducts[key];
    setProducts(updatedProducts);

    const productsRef = ref(database, 'products')
    set(productsRef, updatedProducts)
      .then(console.log("Product deleted from firebase."))
      .catch((error) => console.error('Error when deleting product:',error))

  }

  if (!localStorage.getItem("uid")) {
    return (
      <div className="Login">
        <p>Please login before acccessing The Phone Booth.</p>
      </div>
    )
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

