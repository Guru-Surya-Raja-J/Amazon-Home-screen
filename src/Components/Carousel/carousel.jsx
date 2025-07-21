import { useEffect, useState } from "react";
import "./carousel.css";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img25/Media/PC_Hero_3000x1200_Asin-toys-2x._CB547414496_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/TBSJuly/Updated/TBS_GW_PC_8-min-minee._CB789282537_.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/TBSJuly/Updated/TBS_GW_PC_4_1_1ww-min._CB789281107_.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/TBSJuly/Updated/TBS_GW_PC_6-min_4._CB789281856_.png",
  "https://m.media-amazon.com/images/I/81EOQh8TwiL._SX3000_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/B0F3JM1YP5_Xiaomi_32_Homepage_DesktopHeroTemplate_3000x1200._CB789055996_.jpg"

];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  useEffect(() => {
    const interval  = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  },[]);
  
  return (
    <div className="carousel-container">
      <img
        src={images[current]}
        alt={`Amazon Slide ${current + 1}`}
        className="carousel-image"
      />
      <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
      <button className="carousel-btn next" onClick={nextSlide}>›</button>
    </div>
  );
}

export default HeroCarousel;
