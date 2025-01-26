import React, { useState } from "react";
import "./Navbar.css";
import { BiCartAdd, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <div>
      <nav className="navbar">
        <div className="nav_logo">
          <h2>
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: '#333' }}>
          FurniCraft
            </Link>
          </h2>
        </div>
        <div className={`link ${menuOpen ? "mobile-menu" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav_icon">
          <Link to="/cart">
            <BiCartAdd className="icon cart" />
          </Link>
          <Link to="/register">
            <BiUser className="icon" />
          </Link>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
