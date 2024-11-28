import React from 'react'
import "../CSS/Home.css"

const Filter = ({ onFilterChange }) => {
    
    const handleChange = (event) => {
        onFilterChange(event.target.value);
    }
  return (
    <div className="FilterContainer">
          <h1>
              Filters
          </h1>

          <form className="FilterForm">
              <label><input name="filter" value="All"       type="radio" onChange={handleChange} / >All</label>
              <label><input name="filter" value="Phone"     type="radio" onChange={handleChange} / >Phones</label>
              <label><input name="filter" value="Accessory" type="radio" onChange={handleChange} / >Accessories</label>
          </form>
    </div>
  )
}

export default Filter
