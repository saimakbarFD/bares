import React, { useState } from "react";
import Section from "../main/section";
import Container from "../main/container";
import SectionTag from "../main/sectionTag";
import Heading from "../main/heading";
import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BaresTab2() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const tabContent = [
    {
      tag: "ENERGY & ENVIRONMENT",
      title: "Business Solutions",
      desc: "We believe that great design should not be our download will start automatically in 3 to 5 seconds",
      img: "/images/tabs2/tab1.jpg",
    },
    {
      tag: "TECHNOLOGY & IT",
      title: "Cloud Solutions",
      desc: "Experience seamless cloud computing with our state-of-the-art solutions tailored to your needs.",
      img: "/images/tabs2/tab2.jpg",
    },
    {
      tag: "FINANCE & BANKING",
      title: "Financial Strategies",
      desc: "Empower your business with modern financial solutions and innovative banking strategies.",
      img: "/images/tabs2/tab3.jpg",
    },
  ];

  return (
    <Section classes={"baresMargin baresTabs2"}>
      <Container>
        <SectionTag icon={false} title={"Digital Marketing"} />
        <Heading
          classes={"textDark text-center"}
          Type={"h2"}
          HTML
          title={
            <>
              Popular Services <br /> & Solutions
            </>
          }
        />
        <Row
          style={{ flexDirection: "column" }}
          justify={"center"}
          align={"middle"}
        >
          <Col xl={21} md={24}>
            {tabContent.map((single, index) => (
              <div
                key={index}
                className={
                  hoverIndex === index
                    ? "tabHover baresTabSingle"
                    : "baresTabSingle"
                }
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Row
                  style={{ height: "100%" }}
                  gutter={[40, 40]}
                  justify={"start"}
                  align={"middle"}
                >
                  <Col xl={4} md={12}>
                    <div className="tabNumber">0{index + 1}.</div>
                  </Col>
                  <Col xl={8} md={12}>
                    <article className="tabTitle">
                      <p className="baresDesc">{single.tag}</p>
                      <Heading
                        Type={"h3"}
                        classes={"textDark"}
                        title={single.title}
                      />
                      {hoverIndex === index && (
                        <>
                          <div className="tabTags">Company: Userthemes</div>
                          <div className="tabTags">Industry: {single.tag}</div>
                        </>
                      )}
                    </article>
                  </Col>
                  <Col xl={8} md={12}>
                    {hoverIndex === index ? (
                      <div className="tabImg">
                        <img src={single.img} alt="Tab Image" />
                      </div>
                    ) : (
                      <p className="baresDesc">{single.desc}</p>
                    )}
                  </Col>
                  <Col xl={4} md={12}>
                    <a href="#" className="tabLink">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default BaresTab2;
