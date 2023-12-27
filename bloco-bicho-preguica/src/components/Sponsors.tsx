import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import patrocinador from "../assets/patrocinador.png"

export function Sponsors() {
    const sliderPatrocinadores = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true, 
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 846,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        }
      ]
    }
  
    return (
        <div className="bg-pink-bp h-auto py-8">
            <p className="uppercase text-lg md:text-2xl p-4 font-bold text-white">
            Patrocinadores oficiais
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="order-2 md:order-1 md:col-span-1 p-4 mr-3 flex flex-col justify-center items-center">
                    <button className="blinking-button m-5 uppercase md:font-extrabold md:text-xl font-bold text-base w-full border-none p-3 py-7 bg-yellow-bp text-white border-2">
                    <span className="text-xs md:font-xl font-bold text-pink-bp">Clique aqui</span><br />
                    Seja um<br/> patrocinador
                    </button>
                </div>

                <Slider className="order-1 md:order-2 flex justify-around md:col-span-2 p-4 gap-4" {...sliderPatrocinadores}>
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
    )
}