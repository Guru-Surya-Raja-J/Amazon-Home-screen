import { useEffect, useState } from "react";
import "./carousel.css";

// Your original images for desktop view
const desktopImages = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-2x._CB547414496_.jpg",
  "https://m.media-amazon.com/images/I/81EOQh8TwiL._SX3000_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/B0F3JM1YP5_Xiaomi_32_Homepage_DesktopHeroTemplate_3000x1200._CB789055996_.jpg"
];

// The new images you provided for mobile view
const mobileImages = [
  "https://m.media-amazon.com/images/I/61+j706jO7L._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/81+7bWzhpSL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/61cUIRCbllL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/61gVv8gqUwL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/71963HnhSmL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/91VCJE31hgL._SR1245,1089_.png",
  "https://m.media-amazon.com/images/I/61ya0yWsu3L._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/71Ane7+IHHL._SR1236,1080_.jpg",
  "https://m.media-amazon.com/images/I/51fm4kw-QOL._SR1236,1080_.jpg"
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  // State to check if the view is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Choose the correct image array based on screen size
  const images = isMobile ? mobileImages : desktopImages;

  // This effect adds a listener to update the view when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This effect handles the auto-sliding functionality
  useEffect(() => {
    // Reset to the first slide when switching between mobile/desktop
    setCurrent(0);
    const nextSlide = () => {
      // Use a functional update to get the correct length
      setCurrent(prev => (prev + 1) % (window.innerWidth < 768 ? mobileImages.length : desktopImages.length));
    };
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isMobile]); // Re-run this effect whenever the mobile state changes

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
 
  return (
    <div className="carousel-container">
      <img
        src={images[current]}
        alt={`Amazon Slide ${current + 1}`}
        className="carousel-image"
      />
      {/* Only show the navigation buttons on non-mobile screens */}
      {!isMobile && (
        <>
          <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
          <button className="carousel-btn next" onClick={nextSlide}>›</button>
        </>
      )}
    </div>
  );
}

export default HeroCarousel;
