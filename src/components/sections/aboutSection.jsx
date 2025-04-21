import React from "react";
import Section from "../main/section";
import Container from "../main/container";
import { Row, Col } from "antd";

import ServiceTag from "../main/sectionTag";
import Heading from "../main/heading";
import BaresList from "../main/list";
import BaresBtn from "../main/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleRight";
import Image from "../main/image";

function About() {
  return (
    <>
      <Section id="about" classes="baresAbout baresMargin">
        <Container>
          <Row gutter={[20, 20]}>
            <Col xl={16} sm={24}>
              <ServiceTag icon={false} title="digital marketing" />
              <Heading
                Type="h2"
                classes="textDark"
                title="Talking, Results Driven  Digital Marketing"
                tagLine={false}
              />
              <Row
                className="aboutContent"
                justify="space-between"
                align="start"
              >
                <Col xl={12} md={24} style={{ paddingRight: 20 }}>
                  <p className="baresDesc textDark">
                    Crafting compelling digital experiences that captivate
                    audiences and drive meaningful connections. Our digital
                    agency combines innovation, strategy.
                  </p>
                  <BaresList classes="row-column" />
                  <BaresBtn classes="baresBtn">
                    read more <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </BaresBtn>
                </Col>
                <Col md={0} xl={10} sm={10} xs={0}>
                  <Image imgSrc="/images/about/about1.jpg" />
                </Col>
              </Row>
            </Col>

            <Col
              xl={8}
              md={0}
              xs={0}
              sm={0}
              style={{ alignSelf: "end", paddingLeft: 20, paddingBottom: 20 }}
            >
              <Image imgSrc="/images/about/about2.jpg" />
              <br />
              <Image imgSrc="/images/about/about3.jpg" />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export default About;
