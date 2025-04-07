import React from "react";
import Section from "../main/section";
import Container from "../main/container";
import SectionTag from "../main/sectionTag";
import Heading from "../main/heading";
import { Col, Row } from "antd";
import BaresBtn from "../main/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

function BlogSection() {
  const blogContent = [
    {
      title: "Does My website Need a Blog?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem ipsum",
      img: "/images/blog/thumb1.jpg",
    },
    {
      title: "Does My website Need a Blog?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem ipsum",
      img: "/images/blog/thumb2.jpg",
    },
  ];

  return (
    <Section id="blog" classes={"baresBlog baresMargin"}>
      <Container>
        <SectionTag title={"digital marketing"} icon={false} />
        <Heading
          title={"Check Inside Story."}
          Type={"h2"}
          classes={"textDark text-center"}
        />

        <Row justify={"center"} align={"middle"} gutter={[40, 40]}>
          {blogContent.map((single, index) => {
            return (
              <Col xl={10} md={24} key={index}>
                <div className="blogSingle">
                  <div className="blogImg">
                    <div className="blogTerms">
                      <div className="date">April 25,2025</div>
                      <div className="row flex-center-center rating">
                        <FontAwesomeIcon icon={faStar} />
                        4.9
                      </div>
                    </div>
                    <img src={single.img} alt="" />
                  </div>
                  <article>
                    <Heading
                      classes={"textDark"}
                      Type={"h5"}
                      title={single.title}
                    />
                    <p className="baresDesc textDark">{single.desc}</p>
                  </article>
                </div>
              </Col>
            );
          })}
        </Row>
        <BaresBtn classes={"baresBtn row flex-center-center mx-auto"}>
          more view <FontAwesomeIcon icon={faArrowRight} />
        </BaresBtn>
      </Container>
    </Section>
  );
}

export default BlogSection;
