import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner from "../assets/banner.png"

export function BannerSection() {
    const sliderBanner = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 2
    }

    return (
        <Slider {...sliderBanner}>
            <div id="inicio" className="md:h-auto md:w-auto">
                <img className="w-full h-full object-cover md:object-contain" src={banner} alt="banner" />
            </div>
            <div id="inicio" className="md:h-auto md:w-auto">
                <img className="w-full h-full object-cover md:object-contain" src={banner} alt="banner" />
            </div>
      </Slider>
    )
}