import "./productGrid.css";

const productData = [
  {
    title: "Pick up where you left off",
    items: [
      {
        name: "realme NARZO 80 Pro",
        img: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg",
      },
      {
        name: "realme P3 5G",
        img: "https://m.media-amazon.com/images/I/61tC5WzWvGL._AC_SY110_.jpg",
      },
      {
        name: "IQOO 11 Pro",
        img: "https://m.media-amazon.com/images/I/71KSbXmTdcL._AC_SY110_.jpg",
      },
      {
        name: "realme 11 Pro+",
        img: "https://m.media-amazon.com/images/I/712-8ksgYRL._AC_SY110_.jpg",
      },
    ],
  },
  {
    title: "Categories to explore",
    items: [
      {
        name: "Backpacks",
        img: "https://m.media-amazon.com/images/I/41EKhUc7TKL._MCnd_AC_.jpg",
      },
      {
        name: "Mobile screen guard",
        img: "https://m.media-amazon.com/images/I/513-sbJBhiL._MCnd_AC_.jpg",
      },
      {
        name: "Television",
        img: "https://m.media-amazon.com/images/I/41y2p+6C5vL._MCnd_AC_.jpg",
      },
      {
        name: "Nitendo Switch",
        img: "https://m.media-amazon.com/images/I/41uFwhtpBsL._MCnd_AC_.jpg",
      },
    ],
  },
  {
    title: "Deals related to items you've saved",
    items: [
      {
        name: "Victus Gaming Laptop",
        img: "https://m.media-amazon.com/images/I/715WLPCIrIL._AC_SY145_.jpg",
      },
      {
        name: "HP Gaming Laptop",
        img: "https://m.media-amazon.com/images/I/71W2rcaibRL._AC_SY145_.jpg",
      },
      {
        name: "Lenovo Gaming Laptop",
        img: "https://m.media-amazon.com/images/I/71-wkc60V-L._AC_SY145_.jpg",
      },
      {
        name: "Dell Gaming Laptop",
        img: "https://m.media-amazon.com/images/I/71NZgR0v39L._AC_SY145_.jpg",
      },
    ],
  },
  {
  title: "Top picks in electronics",
  items: [
    {
      name: "boAt Rockerz 450",
      img: "https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UY218_.jpg",
    },
    {
      name: "Noise Buds VS102 Pro",
      img: "https://m.media-amazon.com/images/I/61P0akAiT-L._AC_UL320_.jpg",
    },
    {
      name: "Canon EOS 200D II",
      img: "https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_UY218_.jpg",
    },
    {
      name: "Samsung Galaxy Tab A9+",
      img: "https://m.media-amazon.com/images/I/61J1NUF2sKL._AC_UY218_.jpg",
    },
  ],
}

];
const nextRowProductData = [
  {
    title: "Top deals on home essentials",
    items: [
      {
        name: "Milton Thermosteel Bottle",
        img: "https://m.media-amazon.com/images/I/51GSfIQNuWL._FMavif_AC_SR146,118_PQ50_.jpg",
      },
      {
        name: "Pigeon Non-Stick Cookware",
        img: "https://m.media-amazon.com/images/I/818z334fAuL._FMavif_AC_SR146,118_PQ50_.jpg",
      },
      {
        name: "Philips Mixer Grinder",
        img: "https://m.media-amazon.com/images/I/61THe80DTgL._FMavif_AC_SR146,118_PQ50_.jpg",
      },
      {
        name: "Prestige Induction Cooktop",
        img: "https://m.media-amazon.com/images/I/61VXsc+ueRL._FMavif_AC_SR146,118_PQ50_.jpg",
      },
    ],
  },
  {
    title: "Upgrade your lifestyle",
    items: [
      {
        name: "Titan Men's Watch",
        img: "https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL320_.jpg",
      },
      {
        name: "American Tourister Bag",
        img: "https://m.media-amazon.com/images/I/81rDE6gGxnL._FMavif_AC_SR180,120_PQ50_.jpg",
      },
      {
        name: "Fossil Leather Wallet",
        img: "https://m.media-amazon.com/images/I/51n3GvtHFcL._AC_SR250,250_QL65_.jpg",
      },
      {
        name: "Ray-Ban Sunglasses",
        img: "https://m.media-amazon.com/images/I/21firnAbYaL._AC_SR250,250_QL65_.jpg",
      },
    ],
  },
  {
    title: "For your entertainment zone",
    items: [
      {
        name: "LG 43-inch 4K TV",
        img: "https://m.media-amazon.com/images/I/41Tmd8b8MeL._AC_SR250,250_QL65_.jpg",
      },
      {
        name: "Zebronics Soundbar",
        img: "https://m.media-amazon.com/images/I/4123P5G-DwL._AC_SR250,250_QL65_.jpg",
      },
      {
        name: "Amazon Fire Stick",
        img: "https://m.media-amazon.com/images/I/41X6v0CrKpL._AC_UY218_.jpg",
      },
      {
        name: "PS5 DualSense Controller",
        img: "https://m.media-amazon.com/images/I/61OUOe4fIkL._AC_UY218_.jpg",
      },
    ],
  },
  {
    title: "Student must-haves",
    items: [
      {
        name: "Mi Notebook Ultra",
        img: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL320_.jpg",
      },
      {
        name: "HP Ink Tank Printer",
        img: "https://m.media-amazon.com/images/I/61etD4-IrPL._AC_UL320_.jpg",
      },
      {
        name: "Boat Rockerz 255",
        img: "https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UL320_.jpg",
      },
      {
        name: "Noise Smartwatch",
        img: "https://m.media-amazon.com/images/I/71qvHi7qXEL._AC_UY218_.jpg",
      },
    ],
  },
];


function ProductGrid() {
  return (
    <>
      <div className="product-grid">
        {productData.map((box, i) => (
          <div className="product-card" key={i}>
            <h3>{box.title}</h3>
            <div className="card-items">
              {box.items.map((item, j) => (
                <div className="item" key={j}>
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="product-grid">
        {nextRowProductData.map((box, i) => (
          <div className="product-card" key={i}>
            <h3>{box.title}</h3>
            <div className="card-items">
              {box.items.map((item, j) => (
                <div className="item" key={j}>
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductGrid;
