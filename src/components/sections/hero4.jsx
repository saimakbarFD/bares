import React from "react";
import Section from "../main/section";
import Container from "../main/container";
import { Row, Col, Layout } from "antd";
import Heading from "../main/heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "./slider/slider";
import BaresBtn from "../main/button";
import BaresList from "../main/list";

function Hero4() {
  return (
    <Section>
      <Container>
        <Row
          align={"middle"}
          justify={"start"}
          gutter={{ xl: 16, md: 16, sm: 12 }}
        >
          <Col xl={12} md={12} sm={24}>
            <img
              src="/images/heroImg.png"
              className="animationHero w-100"
              alt=""
            />
          </Col>

          <Col xl={12} md={12} sm={24}>
            <Heading
              Type={"h1"}
              classes={"textLight"}
              tagLine={false}
              title={"Control your financial future easily"}
            />
            <p className="baresDesc">
              You're a startup founder preparing your pitch deck and you want to
              boost your credibility in front of seasoned investors. Perhaps you
              already pitched and got pushback on your projections.
            </p>
            <Row
              align={"middle"}
              gutter={[16, 16]}
              style={{ marginTop: "40px" }}
            >
              <Col xl={12} md={24} sm={24}>
                <BaresBtn classes={"baresBtn m-0"}>
                  Open Account <FontAwesomeIcon icon={faArrowRight} />
                </BaresBtn>
              </Col>
              <Col xl={12} md={24} sm={24}>
                <BaresList classes={"textLight row-column"} />
              </Col>
            </Row>
            <Col xl={20} md={20} sm={24}>
              <Row
                align={"middle"}
                gutter={[16, 16]}
                style={{ marginTop: "50px" }}
              >
                <Col>
                  <img class="w-100" src="/images/4.png" alt="Counter" />
                </Col>
                <Col>
                  <Heading title={"3060"} classes={"textLight"} Type={"h2"} />
                  <p className="birzaDesc textLight">Cases Every Years</p>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Hero4;
