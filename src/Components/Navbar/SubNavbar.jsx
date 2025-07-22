import React from 'react';
import './SubNavbar.css';

// Data using the exact image URLs and labels from Amazon
const subNavItems = [
  { name: 'Prime', img: 'https://m.media-amazon.com/images/I/21r5rCvcAQL._SX100_SY100_.jpg' },
  { name: 'Mobiles', img: 'https://m.media-amazon.com/images/I/21OQCcPV0tL._SX100_SY100_.png' },
  { name: 'Deals', img: 'https://m.media-amazon.com/images/I/01nDWQ5XCSL._SX100_SY100_.png' },
  { name: 'Fashion', img: 'https://m.media-amazon.com/images/I/21QHbXU96AL._SX100_SY100_.png' },
  { name: 'Electronics', img: 'https://m.media-amazon.com/images/I/01SZyAw7k7L._SX100_SY100_.png' },
  { name: 'Home', img: 'https://m.media-amazon.com/images/I/312t+JcSoDL._SX100_SY100_.jpg' },
  { name: 'Fresh', img: 'https://m.media-amazon.com/images/I/11dcI5r-U6L._SX100_SY100_.png' },
  { name: 'Appliances', img: 'https://m.media-amazon.com/images/I/31ICLWjUdHL._SX100_SY100_.png' },
  { name: 'Travel', img: 'https://m.media-amazon.com/images/I/21sUKve+LOL._SX100_SY100_.png' },
  { name: 'Beauty', img: 'https://m.media-amazon.com/images/I/215lv40sqoL._SX100_SY100_.png' },
  { name: 'Pharmacy', img: 'https://m.media-amazon.com/images/I/21GdO7XYcwL._SX100_SY100_.png' },
  { name: 'Movies', img: 'https://m.media-amazon.com/images/I/21xXjwTSVIL._SX100_SY100_.png' },
  { name: 'Books, Toys', img: 'https://m.media-amazon.com/images/I/11gXebGhu6L._SX100_SY100_.jpg' },
  { name: 'Home Decor', img: 'https://m.media-amazon.com/images/I/21dR3LurIkL._SX100_SY100_.png' },
  { name: 'More', img: 'https://m.media-amazon.com/images/I/21-5XYasLKL._SX100_SY100_.png' },
];


const SubNavbar = () => {
  return (
    <div className="sub-navbar-container">
      <div className="sub-navbar-scroll">
        {subNavItems.map((item) => (
          <a key={item.name} href="#" className="sub-navbar-item">
            <div className="sub-navbar-image-container">
              <img src={item.img} alt={item.name} className="sub-navbar-image" />
            </div>
            <span className="sub-navbar-label">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
