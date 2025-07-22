import React, { useState } from "react";
import "./MobileHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import MobileDrawerMenu from "./MobileDrawerMenu";

const MobileHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <header className="mobile-header" role="banner">
      <div className="mobile-header-row">
        <button
          className="mobile-header-hamburger"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div className="mobile-header-logo">
          <img
            src="https://irp.cdn-website.com/44f53704/dms3rep/multi/amazonaa.png"
            alt="Amazon"
            height="28"
          />
        </div>
        <button className="mobile-header-cart" aria-label="Cart">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </button>
      </div>
      <div className="mobile-header-location">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
        <span className="location-text">Deliver to J. Thoothukudi 628002</span>
      </div>
      <MobileDrawerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
};

export default MobileHeader; 