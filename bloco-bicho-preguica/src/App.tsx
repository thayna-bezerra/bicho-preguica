import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

import banner from "./assets/banner.png"
import sobre from "./assets/sobre-nos.png"
import bg from "./assets/bg.png"
import pic from "./assets/pic.png"
import wpp from "./assets/whatsapp.png"
import fb from "./assets/facebook.png"
import insta from "./assets/instagram.png"

import { Header } from "./components/Header";
import { EventShirtSurvey } from "./components/EventShirtSurvey";
import { Sponsors } from "./components/Sponsors";

export function App() {
  const sliderBanner = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 2
  }

  const sliderGallery = {
    arrows: false,
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
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
        <div>
          <div className="flex items-center justify-center py-10 text-white text-center">
            <h1 className="text-lg md:text-2xl font-bold mb-4">GALERIA</h1>
          </div>

          <Slider {...sliderGallery}> 
            <div className="flex justify-around md:col-span-2 p-2 gap-4">
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
            <div className="flex justify-around md:col-span-2 p-2 gap-4">
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
            <div className="flex justify-around md:col-span-2 p-2 gap-4">
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
            <div className="flex justify-around md:col-span-2 p-2 gap-4">
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
            <div className="flex justify-around md:col-span-2 p-2 gap-4">
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
          </Slider> 
        </div>

        <div className="flex flex-col items-center justify-between pt-20 pb-10 md:mx-16 md:flex-row">
          <div className="flex gap-10 md:self-end md:w-full">
            <a href="#" className="w-12 h-12">
              <img src={wpp} alt="WhatsApp"/>
            </a>
            <a href="#" className="w-12 h-12">
              <img src={fb} alt="Facebook"/>
            </a>
            <a href="#" className="w-12 h-12">
              <img src={insta} alt="Instagram"/>
            </a>
          </div>

          <button className="bg-yellow-bp text-white rounded-md uppercase text-base font-bold md:w-full p-4 mt-8">
            Seja um patrocinador
          </button>
        </div>
      </div>
    </>
  );
}
