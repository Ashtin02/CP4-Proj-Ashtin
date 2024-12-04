import React from "react";
import { Link } from "react-router-dom"

//Component that makes up the Header for both the home and login page
const Header = () => {

  //User loads into login page before the shop page
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
