import React from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push("/");
  };

  const NavLinkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <nav>
      <div onClick={handleHomeClick}>
        <img className="logo" src="images/LOGO.svg" alt="logo" />
      </div>
      <ul className="nav-links">
        <Link style={NavLinkStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={NavLinkStyle} to="/contact">
          <li>Contact</li>
        </Link>
        <Link style={NavLinkStyle} to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
