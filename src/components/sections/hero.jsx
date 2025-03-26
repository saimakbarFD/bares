import React from "react";
import Section from "../main/section";
import Container from "../main/container";
import { Row, Col, Layout } from "antd";
import Heading from "../main/heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "./slider/slider";

function Hero() {
  return (
    <Section className="baresHero baresMargin position-relative zi-3">
      <Container>
        <Row
          className="baresMargin"
          gutter={[24, 24]}
          justify="space-between"
          align="middle"
        >
          <Col span={14}>
            <Heading
              Type="h1"
              classes=""
              title="Future of Financial & Advisory Services"
              tagLine={false}
            />
          </Col>
          <Col span={10}>
            <div className="row flex-center-center rating">
              <FontAwesomeIcon icon={faStar} />
              4.9
            </div>
            <p className="baresDesc">
              Crafting compelling digital experiences that captivate audiences
              and drive meaningful connections. Our digital agency combines
              innovation, and strategy.
            </p>
          </Col>
        </Row>
        <Slider />
      </Container>
    </Section>
  );
}

export default Hero;
