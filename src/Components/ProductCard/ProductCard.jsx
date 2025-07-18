import React, { useState } from 'react';
import './ProductCard.css';

const products = [
  {
    id: 1,
    title: "Keep shopping for",
    name: "Game Controller",
    thumbnails: [
      { id: 101, mainImage: "https://m.media-amazon.com/images/I/61gmtBD+F7L._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/61gmtBD+F7L._AC_SY55_.jpg", price: "$2,499" },
      { id: 102, mainImage: "https://m.media-amazon.com/images/I/51hpFcmWCxS._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/51hpFcmWCxS._AC_SY55_.jpg", price: "$2,699" },
      { id: 103, mainImage: "https://m.media-amazon.com/images/I/71RBwY+4yjL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/71RBwY+4yjL._AC_SY55_.jpg", price: "$1,599" },
      { id: 104, mainImage: "https://m.media-amazon.com/images/I/61k-SFOhrtL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/61k-SFOhrtL._AC_SY55_.jpg", price: "$2,799" },
    ]
  },
  {
    id: 2,
    title: "More items to consider",
    name: "ARM based Laptops",
    thumbnails: [
      { id: 201, mainImage: "https://m.media-amazon.com/images/I/510uTHyDqGL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/510uTHyDqGL._AC_SY55_.jpg", price: "$1,999" },
      { id: 202, mainImage: "https://m.media-amazon.com/images/I/71xNblpAqGL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/71xNblpAqGL._AC_SY55_.jpg", price: "$2,099" },
      { id: 203, mainImage: "https://m.media-amazon.com/images/I/71n9XzlKhWL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/71n9XzlKhWL._AC_SY55_.jpg", price: "$2,199" },
      { id: 204, mainImage: "https://m.media-amazon.com/images/I/71Y0unHE7LL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/71Y0unHE7LL._AC_SY55_.jpg", price: "$2,299" },
    ]
  },
    {
    id: 1,
    title: "Keep shopping for",
    name: "Gaming Consoles",
    thumbnails: [
      { id: 101, mainImage: "https://m.media-amazon.com/images/I/71iavy06J3L._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/71iavy06J3L._AC_SY55_.jpg", price: "$2,499" },
      { id: 102, mainImage: "https://m.media-amazon.com/images/I/61yBsKsU-8L._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/61yBsKsU-8L._AC_SY55_.jpg", price: "$2,699" },
      { id: 103, mainImage: "https://m.media-amazon.com/images/I/71APXG8zAHL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/71APXG8zAHL._AC_SY55_.jpg", price: "$1,599" },
      { id: 104, mainImage: "https://m.media-amazon.com/images/I/71ITOiztP2L._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/71ITOiztP2L._AC_SY55_.jpg", price: "$2,799" },
    ]
  },
  {
    id: 2,
    title: "More items to consider",
    name: "SnapDragon Picks",
    thumbnails: [
      { id: 201, mainImage: "https://m.media-amazon.com/images/I/61CK00kuV5L._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/61CK00kuV5L._AC_SY55_.jpg", price: "$1,999" },
      { id: 202, mainImage: "https://m.media-amazon.com/images/I/71QKljfPCkL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/71QKljfPCkL._AC_SY55_.jpg", price: "$2,099" },
      { id: 203, mainImage: "https://m.media-amazon.com/images/I/81w8xa+XkSL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/81w8xa+XkSL._AC_SY55_.jpg", price: "$2,199" },
      { id: 204, mainImage: "https://m.media-amazon.com/images/I/61wL8Qbo0HL._AC_SY175_.jpg", img: "https://m.media-amazon.com/images/I/61wL8Qbo0HL._AC_SY55_.jpg", price: "$2,299" },
    ]
  }
];

const ProductGallery = () => {
  return (
    <div className="product-gallery">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [selected, setSelected] = useState(product.thumbnails[0]);

  return (
    <div className="product-card">
      <h3 className="section-title">{product.title}</h3>
      <img src={selected.mainImage} alt="Main" className="main-image" />
      <p className="product-name">{product.name}</p>
      <p className="product-price">{selected.price}</p>

      <div className="thumbnail-container">
        {product.thumbnails.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt="Thumbnail"
            className={`thumbnail ${item.id === selected.id ? 'active' : ''}`}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>
      <a href="#" className="see-more">See more</a>
    </div>
  );
};

export default ProductGallery;
