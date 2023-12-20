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
  {/* */}
  const sliderBanner = {
    arrows: false,
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
    slidesToShow: 4,
    slideToScroll: 5,
    autoplay: true, 
    autoplaySpeed: 1000,
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
  
  function Menu(e: React.MouseEvent<HTMLImageElement>) {
    const list = document.querySelector("ul");
    e.currentTarget.name === "menu"
      ? ((e.currentTarget.name = "close"),
        list?.classList.add("top-[80px]"),
        list?.classList.add("opacity-100"))
      : ((e.currentTarget.name = "menu"),
        list?.classList.remove("top-[80px]"),
        list?.classList.remove("opacity-100"));
  }

  return (
    <>
    <div className="bg-white h-24 w-full px-4 md:px-20 flex items-center justify-between">
      <div className="order-1 md:order-2">
        <div> 
          <span className="w-[32px] cursor-pointer md:hidden block">
            <img onClick={Menu} src={menu} alt="icon menu" />
          </span>
        </div>
        
        <ul className="text-lg md:text-base gap-10 font-bold text-yellow-bp tracking-1.3 text-uppercase mt-4 md:mt-0 tracking-1.3 md:flex md:items-center z-10  md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="my-6 md:my-0">
            <a href="#inicio" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              INÍCIO
            </a>
          </li>
          <li className="my-6 md:my-0">
            <a href="#votacao" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              VOTAÇÃO
            </a>
          </li>
          <li className="my-6 md:my-0">
            <a href="#sobre" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              SOBRE NÓS
            </a>
          </li>
          <li className="my-6 md:my-0 ">
            <a href="#galeria" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              GALERIA
            </a>
          </li>
          <li className="block md:hidden text-pink-bp my-6 md:my-0">
            <a href="#galeria" className="pb-8 px-2 hover:border-b-8 hover:border-blue-bp scroll-smooth">
              CADASTRE-SE
            </a>
          </li>
        </ul>
      </div>

      <div className="order-2 md:order-1"> 
        <a href="/index.html" className="">
          <img className="w-24 md:h-auto" src={logo} alt="logo-bicho-preguiça" />
        </a>
      </div>

      <div className="order-3 flex gap-11 justify-around">
        <button className="hidden md:block uppercase bg-pink-bp text-white p-3">
          Cadastre-se
        </button>
      </div>
    </div>

{/*  BANNER BICHO  */}
      <Slider {...sliderBanner}>
        <div id="inicio" className="md:h-auto md:w-auto">
          <img className="w-full h-full object-cover md:object-contain" src={banner} alt="banner" />
        </div>
        <div id="inicio" className="md:h-auto md:w-auto">
          <img className="w-full h-full object-cover md:object-contain" src={banner} alt="banner" />
        </div>
      </Slider>

{/*  VOTAÇÃO ABADÁ  */}
      <div id="votacao" className="flex flex-col justify-center items-center gap-5 bg-blue-bp h-auto p-4 mt-2">
        <div className="flex flex-col items-center text-white">
          <p className="uppercase text-lg">
            Vote e escolha no abadá do 
          </p>
          <p className="text-lg md:text-2xl font-bold">
            BICHO PREGUIÇA
          </p>
        </div>

        <div>
          <div className="lg:flex lg:flex-items grid grid-cols-2 gap-x-10 gap-y-6">
            <img src={abada} alt="abada1" />
            <img src={abada} alt="abada2" />
            <img src={abada} alt="abada3" />
            <img src={abada} alt="abada4" />
          </div>
        </div>

        <div>
          <button className="rounded-full m-4 px-8 py-2 font-bold text-sm md:text-lg uppercase text-white bg-pink-bp">
            Confirmar escolha
          </button>
        </div>

      </div>

{/*  PATROCINADORES  */}
      <div className="bg-pink-bp h-auto py-12">
        <p className="uppercase text-lg md:text-2xl p-4 font-bold text-white">
          Patrocinadores oficiais
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1 p-4 mr-3 flex flex-col justify-center items-center">
          <button className="blinking-button uppercase font-extrabold text-xl w-full border-none p-3 py-7 bg-yellow-bp text-white border-2">
            <span className="text-xs md:font-xl font-bold text-pink-bp">Clique aqui</span><br />
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
          <div className="flex justify-around md:col-span-2 p-4 gap-4">
            <img className="w-full h-full" src={patrocinador} alt="patrocinador1" />
          </div>
        </Slider> 
        </div>
      </div>


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
{/* 
        <div className="md:flex-row md:justify-center md:gap-16 lg:pt-40 lg:pb-32">
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

          <button className="bg-yellow-bp rounded-md uppercase text-white text-lg font-bold p-4 mt-4 md:mt-0">
            Seja um patrocinador
          </button>
        </div>*/}
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
