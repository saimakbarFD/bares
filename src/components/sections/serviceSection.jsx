import React, { useState } from "react";
import Section from "../main/section";
import SectionTag from "../main/sectionTag";
import Container from "../main/container";
import Heading from "../main/heading";
import { Row, Col, List } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import BaresBtn from "../main/button";
import Image from "../main/image";
import BaresList from "../main/list";

const serviceData = [
  {
    icon: "/images/services/efficiency.png",
    thumbnail: "/images/services/thumb1.jpg",
    title: "Branding Design",
    desc: "We bring to life the most complex projects, specialize",
  },
  {
    icon: "/images/services/software.png",
    thumbnail: "/images/services/thumb2.jpg",
    title: "Web Development",
    desc: "We bring to life the most complex projects, specialize",
  },
  {
    icon: "/images/services/efficiency.png",
    thumbnail: "/images/services/thumb3.jpg",
    title: "Digital Marketing",
    desc: "We bring to life the most complex projects, specialize",
  },
];

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section id="services">
      <Container>
        <SectionTag icon={false} title="Digital Marketing" />
        <Heading
          Type="h2"
          tagLine={false}
          title="We Offer a Wide Range of Brand Services"
          classes="text-center baresHeading textDark"
        />

        <Row justify="center" gutter={[30, 30]}>
          {serviceData.map((service, index) => (
            <Col xl={8} md={12} sm={24} key={index}>
              <div
                className="serviceSingle text-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="serviceIcon">
                  <img src={service.icon} alt="Icon" />
                </div>
                <Image imgSrc={service.thumbnail} imgAlt="thumbnail" />
                <Heading
                  Type="h5"
                  title={service.title}
                  tagLine={false}
                  classes="textDark"
                />
                {hoveredIndex === index ? (
                  <a href="#">
                    Get Now <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                ) : (
                  <p className="baresDesc textDark">{service.desc}</p>
                )}
              </div>
            </Col>
          ))}
        </Row>

        <Row className="w-100 baresMargin baresPadding" gutter={[45, 45]}>
          <Col xl={12} md={24}>
            <SectionTag icon={faStar} title="Top Rated Company" />
            <Heading
              Type="h2"
              classes="textDark"
              title="We Offer a Wide Range of Brand Services"
              tagLine={false}
            />
            <p className="baresDesc textDark">
              Crafting compelling digital experiences that captivate audiences
              and drive meaningful connections. Our digital agency combines
              innovation, strategy, and expertise to fuel growth.
            </p>
            <Row gutter={{ md: 16 }} align="middle">
              <Col xl={12} md={24}>
                <Heading
                  Type="h5"
                  title="Expect Great Things from Your SEO Agency"
                  tagLine="Drive More Traffic and Sales"
                  classes="textDark"
                />
              </Col>
              <Col>
                <BaresList classes="row-column" />
              </Col>
            </Row>
            <BaresBtn classes="baresBtn">
              Explore More <FontAwesomeIcon icon={faArrowRight} />
            </BaresBtn>
          </Col>

          <Col xl={12} md={0} sm={0} xs={0} className="position-relative">
            <Image imgSrc="/images/side1.jpg" imgAlt="Side Image" />
            <img className="check" src="/images/check.png" alt="Check" />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Services;
