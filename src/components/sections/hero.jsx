import React from "react";
import Section from "../main/section";
import Container from "../main/container";
import Heading from "../main/heading";
import Row from "../main/row";

import Column from "../main/column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "./slider/slider";

function Hero() {
  return (
    <>
      <Section classes="baresHero baresMargin position-relative zi-3">
        <Container>
          <Row classes=" flex-center-between">
            <Column classes="col-7" gap={{ paddingRight: 24 }}>
              <Heading
                Type="h1"
                classes={""}
                title="Future of Financial & Advisory Services"
                tagLine={false}
              />
            </Column>
            <Column classes="col-5" gap={{ paddingLeft: 24 }}>
              <div className="row flex-center-center rating">
                <FontAwesomeIcon icon={faStar} />
                4.9
              </div>
              <p className="baresDesc">
                Crafting compelling digital experiences that captivate audiences
                and drive meaningful connections. Our digital agency combines
                innovation, and strategy.
              </p>
            </Column>
          </Row>
          <Slider />
        </Container>
      </Section>
    </>
  );
}

export default Hero;
