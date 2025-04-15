import React from "react";
import Section from "../main/section";
import Container from "../main/container";
import { Row, Col, Layout } from "antd";
import Heading from "../main/heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import ServiceTag from "../main/sectionTag";
import Slider from "./slider/slider";
import BaresBtn from "../main/button";

function Hero2() {
  return (
    <>
      <section className="baresPadding">
        <Container>
          <div className="mx-auto" style={{ width: "max-content" }}>
            <ServiceTag icon={faStar} title="Top Rated Company" />
          </div>
          <Heading
            Type="h1"
            classes="text-center"
            title="The Fastest Way to Write Copy for your Content"
            tagLine={false}
          />
          <div className="row row-column flex-center-center">
            <p className="baresDesc text-center w-75">
              You're a startup founder preparing your pitch deck and you want to
              boost your credibility in front of seasoned investors. Perhaps you
              already pitched and got pushback on your projections.
            </p>
          </div>
          <BaresBtn classes={"baresBtn row flex-center-center mx-auto"}>
            more view <FontAwesomeIcon icon={faArrowRight} />
          </BaresBtn>
        </Container>
      </section>

      <div className="tagSection animateTop row flex-center-between">
        <div className="leftTags tagInner">
          <div className="heroTag tag1">#elementor pro</div>
          <div className="heroTag tag2">#web development</div>
        </div>
        <div className="rightTags tagInner">
          <div className="heroTag tag3">#email marketing</div>
          <div className="heroTag tag4">#react</div>
          <div className="heroTag tag5">#blog</div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
