import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Media Icons */}
      <div className="icon-container">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook icon"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube icon"></i>
        </a>
        {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin icon"></i>
        </a> */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram icon"></i>
        </a> 
      </div>

      {/* Location and Address Section */}
      <div className="footer-container">
        {/* Our Location */}
        <div className="footer-section">
          <h3>Our Location</h3>
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.9667793435174!2d76.97508367586404!3d29.400527875254294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda476aaaaaab%3A0x54cfc14e08669fd5!2sVishwa%20Bharti%20Vidya%20Niketan%20School!5e0!3m2!1sen!2sin!4v1738756856107!5m2!1sen!2sin"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>Vishwa Bharti Vidya Niketan School</p>
          <p>Street number 6, Desraj Colony</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> 01804050046, 07404466117</p>
          <p><strong>Email:</strong> vbvnpnp@gmail.com</p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Information For</h3>
          <ul>
            <li><Link to="/criteria">Admissions Criteria</Link></li>
            <li><Link to="/fee-structure" >Fee Structure</Link></li>
            <li><Link to="/fee-payment" >Online Payment</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>School</h3>
          <ul>
          <li><Link to="/rules" >Rules & Regulations</Link></li>
            <li><Link to="/book-lists" >Book Lists</Link></li>
            <li><Link to="/uniform">Uniform Code</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Vishwa Bharti Vidya Niketan School, Street number 6, Desraj Colony, Panipat. All rights reserved.</p>
        <p><strong>Developed By:</strong> Mr. Utkarsh Kumar Singh</p>
      </div>
    </footer>
  );
};

export default Footer;



