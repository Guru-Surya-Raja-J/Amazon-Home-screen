import React from "react";
import "./MobileSearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const MobileSearchBar = () => (
  <form className="mobile-searchbar" role="search" aria-label="Search Amazon">
    <span className="mobile-searchbar-icon">
      <FontAwesomeIcon icon={faSearch} />
    </span>
    <input
      type="text"
      className="mobile-searchbar-input"
      placeholder="Search Amazon.in"
      aria-label="Search products"
    />
    <button className="mobile-searchbar-mic" type="button" aria-label="Voice search">
      <FontAwesomeIcon icon={faMicrophone} />
    </button>
  </form>
);

export default MobileSearchBar; 