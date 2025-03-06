import React, { useState } from "react";
import Section from "../main/section";
import SectionTag from "../main/sectionTag";
import Container from "../main/container";
import Heading from "../main/heading";
import Row from "../main/row";
import Column from "../main/column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faRightLong,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import BaresBtn from "../main/button";
import Image from "../main/image";
import { List } from "antd";
import BaresList from "../main/list";

function Services() {
  const service = [
    {
      icon: "/images/services/efficiency.png",
      thumbnail: "/images/services/thumb1.jpg",
      title: "Branding Design",
      desc: "We bring to life the most complex  projects, specialize",
    },
    {
      icon: "/images/services/software.png",
      thumbnail: "/images/services/thumb2.jpg",
      title: "Web Development",
      desc: "We bring to life the most complex  projects, specialize",
    },
    {
      icon: "./images/services/efficiency.png",
      thumbnail: "/images/services/thumb3.jpg",
      title: "Digital Marketing",
      desc: "We bring to life the most complex  projects, specialize",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTag icon={false} title="digital marketing" />
        <Heading
          Type="h2"
          tagLine={false}
          title="We Offer a Wide Range  of Brand Services"
          classes="text-center textDark"
        />

        <Row classes="flex-center-center w-100">
          {service.map((single, index) => {
            const [onHover, setHover] = useState(false);
            const { icon, thumbnail, title, desc } = single;
            return (
              <Column
                classes="col-4"
                gap={
                  service.length === index + 1
                    ? { paddingRight: 0 }
                    : { paddingRight: 30 }
                }
                key={index}
              >
                <div
                  className="serviceSingle text-center"
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <div className="serviceIcon">
                    <img src={icon} alt="Icon" />
                  </div>
                  <Image imgSrc={thumbnail} imgAlt="thumbnail" />
                  <Heading
                    Type="h5"
                    title={title}
                    tagLine={false}
                    classes="textDark"
                  />
                  {onHover ? (
                    <a href="#">
                      Get Now <FontAwesomeIcon icon={faRightLong} />
                    </a>
                  ) : (
                    <p className="baresDesc textDark">{desc}</p>
                  )}
                </div>
              </Column>
            );
          })}
        </Row>
        <Row classes="w-100 baresMargin baresPadding">
          <Column classes="col-6" gap={{ paddingRight: 45 }}>
            <SectionTag icon={faStar} title="Top Rated Company" />
            <Heading
              Type="h2"
              classes="textDark"
              title="We Offer a Wide  Range of Brand  Services"
              tagLine={false}
            />
            <p className="baresDesc textDark">
              Crafting compelling digital experiences that captivate audiences
              and drive meaningful connections. Our digital agency combines
              innovation, strategy, and expertise to fuel.
            </p>
            <Row>
              <Column classes="col-6">
                <Heading
                  Type="h5"
                  title="Expect Great things Your SEO Agency "
                  classes="textDark"
                  tagLine="Drive More Taffic and sales"
                />
              </Column>
              <Column>
                <BaresList />
              </Column>
            </Row>
            <BaresBtn classes="baresBtn">
              explore more
              <FontAwesomeIcon icon={faArrowRight} />
            </BaresBtn>
          </Column>
          <Column classes="position-relative col-6" gap={{ paddingLeft: 45 }}>
            <Image imgSrc="/images/side1.jpg" imgAlt="Side Image" />
            <img className="check" src="/images/check.png" alt="Check" />
          </Column>
        </Row>
      </Container>
    </Section>
  );
}

export default Services;
