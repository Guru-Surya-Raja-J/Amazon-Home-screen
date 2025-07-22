import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt, faBars } from "@fortawesome/free-solid-svg-icons";

// Data for the side menu to keep the JSX clean
const menuSections = [
  {
    title: "Trending",
    items: ["Best Sellers", "New Releases", "Movers and Shakers"],
  },
  {
    title: "Top Categories for You",
    items: ["Watches", "Home & Kitchen", "Apparel", "Beauty"],
  },
  {
    title: "Programs & Features",
    items: ["Today's Deals", "Amazon Bazaar", "Amazon Pay", "Amazon Launchpad"],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "Deals", "Amazon MiniTV", "Sell", "Best Sellers", "Mobiles",
    "Today's Deals", "Electronics", "Prime", "Fashion",
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="amazon-navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* ... your existing navbar container code ... */}
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Open menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <a href="/" className="navbar-logo nav-item-hover">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" className="logo-image" />
        </a>
        <div className="navbar-delivery nav-item-hover">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-pin" />
          <div className="delivery-text">
            <span className="deliver-to">Deliver to Surya</span>
            <span className="location">Thoothukudi 628002</span>
          </div>
        </div>
        <div className="navbar-search">
          <div className="search-dropdown-container">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="category-select" aria-label="Search category">
              {categories.map((category) => ( <option key={category} value={category}>{category}</option> ))}
            </select>
          </div>
          <input type="text" placeholder="Search Amazon.in" className="search-input" aria-label="Search Amazon.in" />
          <button className="search-button" type="submit" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
          </button>
        </div>
        <div className="navbar-language nav-item-hover">
          <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="flag-icon" />
          <span className="language-text">EN</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="navbar-account nav-item-hover">
          <div className="account-text">
            <span className="hello-text">Hello, Surya</span>
            <span className="account-lists">Account & Lists</span>
          </div>
          <FontAwesomeIcon icon={faUser} className="account-icon-mobile" />
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="navbar-orders nav-item-hover">
          <div className="orders-text">
            <span className="returns-text">Returns</span>
            <span className="orders-main">& Orders</span>
          </div>
        </div>
        <div className="navbar-cart nav-item-hover">
          <div className="cart-icon-container">
            <svg className="cart-icon" width="40" height="30" viewBox="0 0 40 33">
              <path d="M38.74,10.87H14.16l-.2-1.84L12.55,1.2A1.25,1.25,0,0,0,11.32,0H1.25A1.25,1.25,0,0,0,0,1.25v1A1.25,1.25,0,0,0,1.25,3.5H9.43l3.52,20.49a1.25,1.25,0,0,0,1.23,1H35a1.25,1.25,0,0,0,1.24-1.11l2.52-12.6A1.25,1.25,0,0,0,38.74,10.87ZM35.8,22.47H15.11l-1-5.75H37.19ZM20.62,31.25a2.5,2.5,0,1,0-2.5-2.5A2.5,2.5,0,0,0,20.62,31.25Zm10,0a2.5,2.5,0,1,0-2.5-2.5A2.5,2.5,0,0,0,30.62,31.25Z" fill="#fff"/>
            </svg>
            <span className="cart-count">2</span>
          </div>
  
        </div>
      </div>

      {/* --- THIS IS THE UPDATED SIDE DRAWER MENU --- */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
                <FontAwesomeIcon icon={faUser} />
                <h3>Hello,surya</h3>
            </div>  

            <div className="mobile-menu-content">
              {/* Main link */}
              <a href="#" className="menu-item main-link">Amazon Home<span className="chevron">&gt;</span></a>
              
              {/* Dynamic Sections */}
              {menuSections.map(section => (
                <div key={section.title} className="menu-section">
                  <h4 className="menu-section-title">{section.title}</h4>
                  {section.items.map(item => <a key={item} href="#" className="menu-item">{item}</a>)}
                  <a href="#" className="menu-item see-all">See All <span className="chevron-down"></span></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;