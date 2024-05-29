import React from 'react';
import './navbar.css'; // Import CSS file for Navbar styles
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo and Name */}
        <Link className="nav-link" to="/">
        <div className="navbar-brand d-flex align-items-center me-auto">
          <img src="img/fake-image-detection-high-resolution-logo-transparent.png" width="60px" alt="isItFake Logo" className="me-2" />
          <span>isItFake</span>
        </div>
        </Link>
        {/* Navbar toggler for smaller screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Links */}
        <div className="navbar-collapse offcanvas-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/working">Working</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
