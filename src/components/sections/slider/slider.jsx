import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Heading from "../../main/heading";
import { Col, Row } from "antd";
// import SwiperGL from "./swiper-gl.esm";
function Slider() {
  const slideContent = [
    {
      title: "Your biggest business challenges. Solved",
      tagline: "Drive More Taffic and sales",
      img: "/images/slider/slide1.jpg",
    },
    {
      title: "Your biggest business challenges. Solved",
      tagline: "Drive More Taffic and sales",
      img: "/images/slider/slide1.jpg",
    },
    {
      title: "Your biggest business challenges. Solved",
      tagline: "Drive More Taffic and sales",
      img: "/images/slider/slide1.jpg",
    },
  ];

  return (
    <>
      <div className="HeroSlider baresMargin">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {slideContent.map((single, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={single.img} alt="Slider Image" />
                <Row
                  justify={"start"}
                  align={"bottom"}
                  style={{ zIndex: 4, position: "relative" }}
                >
                  <Col xl={14} md={24}>
                    <Heading
                      Type="h3"
                      classes="position-relative zi-3"
                      tagLine={single.tagline}
                      title={single.title}
                    />
                  </Col>
                </Row>
              </SwiperSlide>
            );
          })}

          {/* <img src="/images/slider/blurry.png" alt="Overlay" /> */}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
