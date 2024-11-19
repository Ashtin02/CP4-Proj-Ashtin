import React from "react";
import { Link } from "react-router-dom"
import "../CSS/Header.css"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="/AddRecipe">Add Recipe</Link></li>
          <li><Link to="/Login" >Login</Link></li>
          <li><Link to="/Register" >Register</Link></li>
          <li><Link to="/Profile" >Profile</Link></li>
        </ul>
      </nav>

    </header>
  
  );
};

export default Header;
