import React, {useRef} from 'react'
import Products from "../AllProducts"
import PropTypes from 'prop-types'

//Component to hold a Form that will make a new product
const AddProductForm = ({ addProduct }) => {
    const nameRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();
    const descRef = useRef();
    const imageRef = useRef();

  //creates a product from the information that the user fills out in the webpage
    const createProduct = (event) => {
        event.preventDefault();

        const newProduct = {
            name: nameRef.current.value,
            image: imageRef.current.value,
            Desc: descRef.current.value,
            Category: categoryRef.current.value,
            Price: priceRef.current.value
        };
        addProduct(newProduct);

        event.currentTarget.reset();
    }

  return (
    <div>
          <form className="AddProduct" onSubmit={ createProduct }>
              <input className="inputs" name="name" ref={nameRef} type="text" placeholder='Name' />
              <input className="inputs"  name="image" ref={imageRef} type="text" placeholder='Image' />
              <input className="inputs" name="Desc" ref={descRef} type="text" placeholder='Description' />
              <select className="inputs"  name="Category" ref={categoryRef}>
                  <option className="inputs" value="Phone">Phone</option>
                  <option className="inputs" value="Accessory">Accessory</option>
              </select>
              <input className="inputs" name="Price" ref={priceRef} type="text" placeholder='Price' />
              <button className="inputs" type="submit">Add/Edit Product</button>
      </form>
    </div>
  )
}

AddProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
}

export default AddProductForm
