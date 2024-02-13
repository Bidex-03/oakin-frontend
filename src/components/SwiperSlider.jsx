// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SwiperSlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import slide_image_1 from "../assets/slider-1.jpg";
import slide_image_2 from "../assets/slider-2.jpg";
import slide_image_3 from "../assets/slider-3.jpg";
import slide_image_4 from "../assets/slider-4.jpg";
import slide_image_5 from "../assets/slider-5.jpg";

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={2}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
