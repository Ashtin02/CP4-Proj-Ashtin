import React from "react";
import { Link } from "react-router-dom"
import "../CSS/Header.css"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Login" >Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
