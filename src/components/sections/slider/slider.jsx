import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Heading from "../../main/heading";
// import SwiperGL from "./swiper-gl.esm";
function Slider() {
  return (
    <>
      <div className="HeroSlider baresMargin">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // effect="gl"
          // onBeforeInit={(swiper) => (swiper.params.gl.shader = "morph-x")}
        >
          <SwiperSlide>
            <img src="./src/assets/images/slider/slide1.jpg" alt="" />
            <Heading Type="h3" classes="position-relative zi-3 borderHeading">
              <span className="smallHeading">Drive More Taffic and sales</span>
              Your biggest business challenges. Solved
            </Heading>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <img src="./src/assets/images/slider/blurry.png" alt="" />
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
