import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faBoxOpen,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Books",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys & Games",
    "Beauty",
    "Automotive",
    "Health",
    "Grocery",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="amazon-navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#" aria-label="Amazon Homepage">
            <img
              src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
              alt="Amazon"
              className="logo-image"
            />
          </a>
        </div>

        <div
          className="navbar-delivery"
          tabIndex="0"
          role="button"
          aria-label="Select delivery location"
        >
          <div className="delivery-icon">
            <img
              src="https://img.icons8.com/ios-filled/20/ffffff/marker.png"
              alt="Location pin"
              className="location-pin"
            />
          </div>
          <div className="delivery-text">
            <span className="deliver-to">Deliver to</span>
            <span className="location">Chennai 600001</span>
          </div>
        </div>

        <div className="navbar-search" role="search">
          <div className="search-dropdown">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
              aria-label="Search category"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="dropdown-arrow">▼</div>
          </div>
          <input
            type="text"
            placeholder="Search Amazon"
            className="search-input"
            aria-label="Search products"
          />
          <button className="search-button" type="submit" aria-label="Search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>

        <div
          className="navbar-language"
          tabIndex="0"
          role="button"
          aria-label="Select language"
        >
        
            <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India Flag"
                  width="24"
                  height="18"
                  className="flag-icon"
                />
          <span className="language-text">EN</span>
          <span className="dropdown-arrow">▼</span>
        </div>

        <div
          className="navbar-account"
          tabIndex="0"
          role="button"
          aria-label="Account and Lists"
        >
          <div className="account-text">
            <span className="hello-text">Hello, Sign in</span>
            <span className="account-lists">Account & Lists</span>
          </div>
          <span className="dropdown-arrow">▼</span>
        </div>

        <div
          className="navbar-orders"
          tabIndex="0"
          role="button"
          aria-label="Returns and Orders"
        >
          <div className="orders-text">
            <span className="returns-text">Returns</span>
            <span className="orders-main">& Orders</span>
          </div>
        </div>

        <div
          className="navbar-cart"
          tabIndex="0"
          role="button"
          aria-label="Shopping cart, 2 items"
        >
          <div className="cart-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count" aria-label="2 items in cart">
              2
            </span>
          </div>
          <span className="cart-text">Cart</span>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h2>Browse</h2>
              <button
                className="close-menu"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mobile-menu-item">
              <div className="mobile-search">
                <select className="mobile-category-select" defaultValue="All">
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Search Amazon"
                  className="mobile-search-input"
                />
                <button className="mobile-search-button" aria-label="Search">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mobile-menu-section">
              <div className="mobile-menu-item">
                <img
                  src="https://img.icons8.com/ios-filled/20/ffffff/marker.png"
                  alt=""
                  className="menu-icon"
                />
                <span>Deliver to Chennai 600001</span>
              </div>
              <div className="mobile-menu-item">
               
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India Flag"
                  width="24"
                  height="18"
                  style={{ marginRight: "8px" }}
                />
                <span>India</span>
              </div>
              <div className="mobile-menu-item">
                <FontAwesomeIcon icon={faUser} /> <span>Hello, Sign in</span>
              </div>

              <div className="mobile-menu-item">
                <FontAwesomeIcon icon={faBoxOpen} />{" "}
                <span>Returns & Orders</span>
              </div>

              <div className="mobile-menu-item cart-item">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Cart</span>
                <span className="mobile-cart-count">2</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
