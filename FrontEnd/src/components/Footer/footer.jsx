import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-container'> 
      <footer className='footer-content'>
        <div className="footer-text">Questions? Call 000-800-919-1694</div>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/working">Working</Link>
          <Link to="/team">Our Team</Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
