import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import a from "../assets/fotos/0.jpg";
import b from "../assets/fotos/1.jpg";
import c from "../assets/fotos/2.jpg";
import d from "../assets/fotos/3.jpg";
import e from "../assets/fotos/4.jpg";
import f from "../assets/fotos/5.jpg";
import g from "../assets/fotos/6.jpg";
import h from "../assets/fotos/7.jpg";
import i from "../assets/fotos/8.jpg";
import j from "../assets/fotos/9.jpg";
import k from "../assets/fotos/10.jpg";
import l from "../assets/fotos/11.jpg";
import m from "../assets/fotos/12.jpg";
import n from "../assets/fotos/13.jpg";
import o from "../assets/fotos/14.jpg";
import p from "../assets/fotos/15.jpg";
import q from "../assets/fotos/16.jpg";
import r from "../assets/fotos/17.jpg";
import s from "../assets/fotos/18.jpg";
import t from "../assets/fotos/19.jpg";
import u from "../assets/fotos/20.jpg";

export function Gallery() {
    const sliderGallery = {
      arrows: false,
      centerMode: true,
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
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };

    const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u];

    return (
        <div>
          <div className="flex items-center justify-center py-10 text-white text-center">
            <h1 className="text-lg md:text-2xl font-bold mb-4">GALERIA</h1>
          </div>

          <Slider {...sliderGallery}> 
            {images.map((image, index) => (
              <div key={index} className="flex justify-around md:col-span-2 p-2 gap-4">
                <img className="w-full h-full" src={image} />
              </div>
            ))}
          </Slider> 
        </div>
    );
}
