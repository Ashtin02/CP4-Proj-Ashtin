import React from "react";
import { Link } from "react-router-dom"
import "../CSS/Header.css"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/Home" >Shop</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
