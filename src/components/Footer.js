import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footbar">
      
      <div className="footbar-inner">
        <Link to="/about" id="foot-text">
          About
        </Link>
        <Link to="/about" id="foot-text">
          Customer Care
        </Link>
        <Link to="/about" id="foot-text">
          Leave a Review
        </Link>
        <Link to="/about" id="foot-text">
          Follow us on Social Media
        </Link>
        
      </div>
    </div>
    </div>
  );
}

export default Footer;