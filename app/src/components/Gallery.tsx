import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic from "../assets/pic.png"

export function Gallery() {
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
    )
}