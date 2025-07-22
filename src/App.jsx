import HeroCarousel from "./Components/Carousel/carousel";
import Footer from "./Components/Footer/Footer";
import ImageCarousel from "./Components/Horizontal/horizontal";
import UniqueImageCarousel from "./Components/Horizontal/horizontal";
import ProductCarousels from "./Components/Horizontal/horizontal";
import Carousel from "./Components/Horizontal/horizontal";
import Navbar from "./Components/Navbar/Navbar";
import Navbar_two from "./Components/Navbar/navbar_two";
import SubNavbar from "./Components/Navbar/SubNavbar";
import ProductCard from "./Components/ProductCard/ProductCard";
import ProductGrid from "./Components/ProductGrid/ProductGrid";



function App() {
  return <>
  <Navbar/>
  <SubNavbar/>
  <Navbar_two/>
  <HeroCarousel/>
  <ProductGrid/>  
  <ProductCard/>

  <ProductCarousels/>
  <Footer/>

</>;
}

export default App;
