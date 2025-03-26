import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Heading from "../../main/heading";
import { Col, Row } from "antd";
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
            <img src="/images/slider/slide1.jpg" alt="" />
            <Row justify={"start"} align={"bottom"}>
              <Col span={12}>
                {" "}
                <Heading
                  Type="h3"
                  classes="position-relative zi-3"
                  tagLine="Drive More Taffic and sales"
                  title="Your biggest business challenges. Solved"
                />
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <img src="/images/slider/blurry.png" alt="Overlay" />
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
