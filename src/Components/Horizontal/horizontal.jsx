import React, { useRef, useState, useEffect } from "react"; // Fixed: Added useEffect import
import "./horizontal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const electronicImages = [
     "https://m.media-amazon.com/images/I/510uTHyDqGL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71xNblpAqGL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71OPe4Vfb4L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71n9XzlKhWL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71Y0unHE7LL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71d6WSuYrrL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/616jdfyhw8L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71pmsQ2NTcL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71ZZ0yHLuYL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71wK6ao6Y8L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81oiU1oIFOL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/715WLPCIrIL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81k8p31p7AL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81k8p31p7AL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51g1O5oCHIL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/519RoeX1P4L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61q6x-ll5FL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71D9HSayVSL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51+DIoehhwL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51KjC3V96PL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51KyHVVgX1L._AC_SY200_.jpg"

];

const fashionImages = [
  "https://m.media-amazon.com/images/I/61H548ZWlEL._AC_SY145_.jpg",
  "https://m.media-amazon.com/images/I/716cK1cTm9L._AC_UL480_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/51Xzs9I9kyL._AC_UL480_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/61UE51azLWL._AC_SY145_.jpg",
  "https://m.media-amazon.com/images/I/71ad8PSy5kL._AC_UL480_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/41NhTLlMwjL._AC_SX250_.jpg",
  "https://m.media-amazon.com/images/I/61h13c1c19L._AC_UL480_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/712XTTg1j6L._AC_UL480_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/810Dpv2uORL._AC_UL480_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/41iy86ypA3L._AC_SX250_.jpg",
  "https://m.media-amazon.com/images/I/617fpstijES._AC_SX500_.jpg",
];



const essentialImages = [
  "https://m.media-amazon.com/images/I/912tcfPajcL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/51y2kTBplLL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/I/61ujIj-TksL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/7103Wl91cqL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/515Dz3Ko3jL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/719vFw17GOL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/I/31IQb9txInL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61MnI9GIXdL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61TloGeiCBL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/I/61e-HyTecSL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61vrW-ej9aL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61AAvQ5KSIL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/714z0dLDr3L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61vGdKmtkgL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61Ub29YXYQL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/31GsFSkRF3L._AC_SY200_.jpg"

];


// Reusable Carousel Component
const ProductCarousel = ({ title, images }) => {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -500 : 500;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsScrolled(scrollLeft > 0);
      setIsScrollEnd(scrollLeft >= (scrollWidth - clientWidth - 1));
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check on mount
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, [images]); // Dependency array ensures this runs once per image set

  return (
    <div
      className="uhc-carousel-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && isScrolled && (
        <button className="uhc-arrow uhc-left" onClick={() => scroll("left")}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {hovered && !isScrollEnd && (
        <button className="uhc-arrow uhc-right" onClick={() => scroll("right")}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
      <h1>{title}</h1>
      <div className="uhc-scroll-track" ref={scrollRef}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel-img-${index}`}
            className="uhc-image "
          />
        ))}
      </div>
    </div>
  );
};

// Parent Component to render all carousels
const ProductCarousels = () => {
  return (
    <div className="overall-carousel">
      <ProductCarousel title="Top picks in electronics"  images={electronicImages} />
      <ProductCarousel title="Trending in fashion" images={fashionImages} />
      <ProductCarousel title="Deals on everyday essentials" images={essentialImages} />
    </div>
  );
};

export default ProductCarousels;
