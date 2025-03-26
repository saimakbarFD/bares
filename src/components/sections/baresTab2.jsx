import React, { useState } from "react";
import Section from "../main/section";
import Container from "../main/container";
import SectionTag from "../main/sectionTag";
import Heading from "../main/heading";
import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function BaresTab2() {
  const tabContent = [
    {
      tag: "ENERGY & ENVIRONMENT",
      title: "Business Solutions",
      desc: "We believe that great design should not be our download will start automatically in 3 to 5 seconds",
      img: "/images/tabs2/tab1.jpg",
    },
    {
      tag: "ENERGY & ENVIRONMENT",
      title: "Business Solutions",
      desc: "We believe that great design should not be our download will start automatically in 3 to 5 seconds",
      img: "/images/tabs2/tab1.jpg",
    },
    {
      tag: "ENERGY & ENVIRONMENT",
      title: "Business Solutions",
      desc: "We believe that great design should not be our download will start automatically in 3 to 5 seconds",
      img: "/images/tabs2/tab1.jpg",
    },
  ];

  return (
    <>
      <Section classes={"baresMargin baresTabs2"}>
        <Container>
          <SectionTag icon={false} title={"digital marketing"} />
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
            <Col span={21}>
              {tabContent.map((single, index) => {
                const [tabHover, setTabHover] = useState(false);

                return (
                  <div
                    key={index}
                    className={
                      tabHover ? "tabHover baresTabSingle" : "baresTabSingle"
                    }
                    onMouseEnter={() => setTabHover(true)}
                    onMouseLeave={() => setTabHover(false)}
                  >
                    <Row
                      style={{ height: "100%" }}
                      gutter={[40, 40]}
                      justify={"start"}
                      align={"center"}
                    >
                      <Col>
                        <div className="tabNumber">0{index + 1}.</div>
                      </Col>
                      <Col>
                        <article className="tabTitle">
                          <p className="baresDesc">{single.tag}</p>
                          <Heading
                            Type={"h3"}
                            classes={"textDark"}
                            title={"Business Solutions"}
                          />
                          {tabHover && (
                            <>
                              <div className="tabTags">Company: Userthemes</div>
                              <div className="tabTags">Company: Userthemes</div>
                            </>
                          )}
                        </article>
                      </Col>
                      <Col span={9}>
                        {tabHover ? (
                          <div className="tabImg">
                            <img src={single.img} alt="Tab Image" />
                          </div>
                        ) : (
                          <p className="baresDesc">{single.desc}</p>
                        )}
                      </Col>
                      <Col span={4}>
                        <a href="#" className="tabLink">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}

<></>;
export default BaresTab2;
