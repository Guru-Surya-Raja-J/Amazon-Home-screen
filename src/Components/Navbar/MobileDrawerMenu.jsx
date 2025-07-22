import React from "react";
import "./MobileDrawerMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    title: "Trending",
    items: ["Bestsellers", "New Releases", "Movers and Shakers"],
  },
  {
    title: "Top Categories for You",
    items: ["Watches", "Home & Kitchen", "Apparel", "Beauty", "See All Categories"],
  },
  {
    title: "Programs & Features",
    items: [
      "Today's Deals",
      "Amazon Bazaar",
      "Amazon Pay",
      "Amazon Launchpad",
      "Handloom and Handicrafts",
    ],
  },
];

const MobileDrawerMenu = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="mobile-drawer-overlay" onClick={onClose}>
      <aside
        className="mobile-drawer"
        role="navigation"
        aria-label="Amazon mobile menu"
        onClick={e => e.stopPropagation()}
      >
        <div className="mobile-drawer-header">
          <span className="drawer-title">Browse <b>Amazon</b></span>
          <span className="drawer-account">
            Your Account <FontAwesomeIcon icon={faUser} />
          </span>
          <button className="drawer-close" aria-label="Close menu" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="drawer-section home-section">
          <span className="drawer-item home active">
            <FontAwesomeIcon icon={faHome} className="drawer-item-icon" /> Amazon Home
          </span>
        </div>
        {sections.map(section => (
          <div className="drawer-section" key={section.title}>
            <div className="drawer-section-title">{section.title}</div>
            {section.items.map(item => (
              <span className="drawer-item" key={item}>{item}</span>
            ))}
          </div>
        ))}
      </aside>
    </div>
  );
};

export default MobileDrawerMenu; 