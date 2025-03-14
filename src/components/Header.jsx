import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          {location.pathname !== "/" && (
            <li>
              <Link to="/" className="nav-link" onClick={closeMenu}>HOME</Link>
            </li>
          )}

          <li className="dropdown">
            <button className="dropdown-toggle" onClick={() => toggleDropdown("academics")}>
              ACADEMICS
            </button>
            <ul className={`dropdown-menu ${openDropdown === "academics" ? "show" : ""}`}>
              <li><Link to="/syllabus" onClick={closeMenu}>Syllabus</Link></li>
              <li><Link to="/book-lists" onClick={closeMenu}>Book Lists</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
              <li><Link to="/results" onClick={closeMenu}>Results</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <button className="dropdown-toggle" onClick={() => toggleDropdown("admission")}>
              ADMISSION
            </button>
            <ul className={`dropdown-menu ${openDropdown === "admission" ? "show" : ""}`}>
              <li><Link to="/criteria" onClick={closeMenu}>Criteria</Link></li>
              <li><Link to="/fee-structure" onClick={closeMenu}>Fee Structure</Link></li>
              <li><Link to="/fee-payment" onClick={closeMenu}>Online Payment</Link></li>
              <li><Link to="/uniform" onClick={closeMenu}>Uniform Code</Link></li>
              <li><Link to="/rules" onClick={closeMenu}>Rules & Regulations</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <button className="dropdown-toggle" onClick={() => toggleDropdown("facilities")}>
              FACILITIES
            </button>
            <ul className={`dropdown-menu ${openDropdown === "facilities" ? "show" : ""}`}>
              <li><Link to="/smart-classes" onClick={closeMenu}>Smart Classes</Link></li>
              <li><Link to="/library" onClick={closeMenu}>Library</Link></li>
              <li><Link to="/computer-lab" onClick={closeMenu}>Computer Lab</Link></li>
              <li><Link to="/science-lab" onClick={closeMenu}>Science Lab</Link></li>
              <li><Link to="/facilities-more" onClick={closeMenu}>More</Link></li>
            </ul>
          </li>

          <li><Link to="/gallery" className="nav-link" onClick={closeMenu}>GALLERY</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMenu}>ABOUT US</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMenu}>CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
