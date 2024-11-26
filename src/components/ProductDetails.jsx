import React, { useState, useEffect } from 'react';
import "../CSS/Home.css"
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { firebaseApp } from '../firebase';

const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp)

const ProductDetails = ({ product }) => {
  const [uid, setUid] = useState(null);
  const [owner, setOwner] = useState(null);


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
