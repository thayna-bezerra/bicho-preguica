import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

import banner from "./assets/banner.png"
import sobre from "./assets/sobre-nos.png"
import bg from "./assets/bg.png"

import { Header } from "./components/Header";
import { EventShirtSurvey } from "./components/EventShirtSurvey";
import { Sponsors } from "./components/Sponsors";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

export function App() {
  const sliderBanner = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 2
  }


  return (
    <>
      <Header />

      {/*  BANNER BICHO  */}
      <Slider {...sliderBanner}>
        <div id="inicio" className="md:h-auto md:w-auto">
          <img className="w-full h-full object-cover md:object-contain" src={banner} alt="banner" />
        </div>
        <div id="inicio" className="md:h-auto md:w-auto">
          <img className="w-full h-full object-cover md:object-contain" src={banner} alt="banner" />
        </div>
      </Slider>

      <EventShirtSurvey />
      <Sponsors />


{/*  SOBRE NÓS  */}
      <div id="sobre" className="bg-blue-bp h-auto flex flex-col md:flex-row justify-center items-center">
        <div className="text-white text-center py-5">
          <p className="uppercase text-lg md:text-2xl pb-5 font-bold text-white">
            Sobre nós
          </p>
          <p className="text-sm md:text-lg px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure incidunt nulla obcaecati nobis sunt excepturi quas perferendis doloremque quia, dolorum expedita! Ipsum molestiae magni minima? Voluptatum, eligendi sint? Sed?</p>
        </div>
        <div className="w-full">
          <img className="w-full h-full object-cover" src={sobre} alt="sobre nos" />
        </div>
      </div>


      <div id="galeria" className="relative bg-cover" style={{ backgroundImage: `url(${bg})` }}>
        <Gallery />
        <Footer />    
      </div>
    </>
  );
}
