import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import '../Hero.css'
import 'swiper/css';
import 'swiper/css/pagination';
import HeroImage_1 from "../medias/LandingPage.jpg";
import HeroImage_2 from "../medias/HeroImage2.jpg";
// import HeroImage_3 from "../medias/NavLogo.png";
// import HeroImage_4 from "../medias/NavLogo.png";
// import HeroImage_5 from "../medias/NavLogo.png";
// import HeroImage_6 from "../medias/NavLogo.png";
// import HeroImage_7 from "../medias/NavLogo.png";

function Carousell() {
  return (
    <div>
        <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper border-b-2 border-[#02bbbd]"
      >
        <SwiperSlide><img src={HeroImage_1} alt="Hero" /></SwiperSlide>
        <SwiperSlide><img src={HeroImage_2} alt="Hero" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousell