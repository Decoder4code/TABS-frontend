import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar">
      <Link className="brand-name" to="/">
        SMYL Bookings
      </Link>
      <div className="navbar-inner">
        <Link to="/" id="link-text">
          Home
        </Link>
        <Link to="/signup" id="link-text">
          SignUp
        </Link>
        <Link to="/login" id="link-text">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;