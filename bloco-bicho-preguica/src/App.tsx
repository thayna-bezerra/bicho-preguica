import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

import logo from "./assets/logo.png"
import banner from "./assets/banner.png"
import abada from "./assets/abada.png"
import patrocinador from "./assets/patrocinador.png"
import menu from "./assets/icon-menu.png"
import sobre from "./assets/sobre-nos.png"
import bg from "./assets/bg.png"
import pic from "./assets/pic.png"
import wpp from "./assets/whatsapp.png"
import fb from "./assets/facebook.png"
import insta from "./assets/instagram.png"

export function App() {
  const sliderBanner = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 2
  }
  const sliderPatrocinadores = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 5
  }

  return (
    <>
      {/*  HEADER  */}   
      <div className="bg-white px-4 flex items-center justify-between">
        <div>
          <img className="w-28 md:w-20 py-2" src={logo} alt="logo-bicho-preguiça" />
        </div>

        <div> 
          <span className="cursor-pointer md:hidden block">
            <img src={menu} alt="icon menu"/>
          </span>
        </div>
        
        <ul className="text-lg gap-10 font-bold text-yellow-bp md:mt-0 mt-[29px] tracking-1.3 text-uppercase md:flex md:items-center md:justify-around md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7">
          <li className="my-6 md:my-0">
            <a href="#inicio" className="pb-6 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              INÍCIO
            </a>
          </li>
          <li className="my-6 md:my-0">
            <a href="#votacao" className="pb-6 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              VOTAÇÃO
            </a>
          </li>
          <li className="my-6 md:my-0">
            <a href="#sobre" className="pb-6 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              SOBRE NÓS
            </a>
          </li>
          <li className="my-6 md:my-0 ">
            <a href="#galeria" className="pb-6 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              GALERIA
            </a>
          </li>
          <button className="uppercase bg-pink-bp text-white p-3">
            Cadastre-se
          </button>
        </ul>
      </div>

{/*  BANNER BICHO  */}
      <Slider {...sliderBanner}>
        <div id="inicio" className="md:h-auto md:w-auto">
          <img className="object-cover w-full h-full" src={banner} alt="banner" />
        </div>
        <div id="inicio" className="md:h-auto md:w-auto">
          <img className="object-cover w-full h-full" src={banner} alt="banner" />
        </div>
      </Slider>

{/*  VOTAÇÃO ABADÁ  */}
      <div id="votacao" className="flex flex-col justify-center items-center gap-5 bg-blue-bp h-auto p-4 mt-2">
        <div className="flex flex-col items-center text-white">
          <p className="uppercase text-sm">
            Vote e escolha no abadá do 
          </p>
          <p className="text-lg font-bold">
            BICHO PREGUIÇA
          </p>
        </div>

        <div>
          <div className="md:flex md:flex-items grid grid-cols-2 gap-x-10 gap-y-6">
            <img src={abada} alt="abada1" />
            <img src={abada} alt="abada2" />
            <img src={abada} alt="abada3" />
            <img src={abada} alt="abada4" />
          </div>
        </div>

        <div>
          <button className="rounded-full m-4 px-8 py-2 font-bold text-xs uppercase text-white bg-pink-bp">
            Confirmar escolha
          </button>
        </div>

      </div>

{/*  PATROCINADORES  */}
      <div className="bg-pink-bp h-auto py-12">
        <p className="uppercase text-lg md:text-3xl p-4 font-bold text-white">
          Patrocinadores oficiais
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1 p-4 mr-3">
            <button className="uppercase font-extrabold text-3xl w-full h-full border-none p-3 bg-yellow-bp text-white border-2">
              <span className="text-xs md:font-2xl font-bold text-pink-bp">Clique aqui</span><br />
              Seja um<br/> patrocinador
            </button>
          </div>

          <Slider className="flex justify-around md:col-span-2 p-4 gap-4" {...sliderPatrocinadores}>
            <div className="flex justify-around md:col-span-2 p-4 gap-4">
              <img className="w-full h-full" src={patrocinador} alt="patrocinador1" />
            </div>
            <div className="flex justify-around md:col-span-2 p-4 gap-4">
              <img className="w-full h-full" src={patrocinador} alt="patrocinador1" />
            </div>
            <div className="flex justify-around md:col-span-2 p-4 gap-4">
              <img className="w-full h-full" src={patrocinador} alt="patrocinador1" />
            </div>
            <div className="flex justify-around md:col-span-2 p-4 gap-4">
              <img className="w-full h-full" src={patrocinador} alt="patrocinador1" />
            </div>
          </Slider> 
        </div>
      </div>

{/* 
        <div className="md:block hidden">
          <button className="uppercase rounded-xl font-extrabold text-2xl w-full h-full p-3 bg-yellow-bp text-white border-2 border-purple-bp">
            <span className="text-xs font-bold text-pink-bp">Clique aqui</span><br />
            Seja um<br/> patrocinador
          </button>
        </div>

      <div className="bg-purple-bp h-auto flex justify-center p-1">
        <button className="uppercase rounded-xl font-extrabold text-2xl w-full h-full p-3 bg-yellow-bp text-white border-2 border-purple-bp">
          <span className="text-xs font-bold text-pink-bp">Clique aqui</span><br />
          Seja um<br/> patrocinador
        </button>
      </div>
*/}

{/*  SOBRE NÓS  */}
      <div id="sobre" className="bg-blue-bp h-auto flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="text-white text-center">
          <p className="uppercase text-lg md:text-3xl pb-10 font-bold text-white">
            Sobre nós
          </p>
          <p className="text-sm md:text-2xl px-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure incidunt nulla obcaecati nobis sunt excepturi quas perferendis doloremque quia, dolorum expedita! Ipsum molestiae magni minima? Voluptatum, eligendi sint? Sed?</p>
        </div>
        <div className="w-full">
          <img className="w-full h-full object-cover" src={sobre} alt="sobre nos" />
        </div>
      </div>


      <div id="galeria" className="relative bg-cover" style={{ backgroundImage: `url(${bg})` }}>
        <div>
          <div className="flex items-center justify-center py-10 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">GALERIA</h1>
          </div>

          <Slider className="flex justify-around md:col-span-2 p-4 gap-4" {...sliderBanner}> 
            <div>
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
            <div>
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
            <div>
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
            <div>
              <img className="w-full h-full" src={pic} alt="pic1" />
            </div>
          </Slider>
        </div>

        <div className="flex items-center justify-center gap-16 pt-40 pb-32"> 
          <div className="flex gap-5">
            <a href="#">
              <img src={wpp} alt=""/>
            </a>
            <a href="#">
              <img src={fb} alt=""/>
            </a>
            <a href="#">
              <img src={insta} alt=""/>
            </a>
          </div>

          <button className="bg-yellow-bp rounded-md uppercase text-white text-lg font-bold p-4">
            Seja um patrocinador
          </button>
        </div>
      </div>
    </>
  );
}
