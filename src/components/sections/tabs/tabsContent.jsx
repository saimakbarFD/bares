import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Project({ type }) {
  const projectContent = [
    { type: "creative", link: "#", imgSrc: "/images/tabs/tab1.jpg" },
    { type: "innovative", link: "#", imgSrc: "/images/tabs/tab2.jpg" },
    { type: "ideas", link: "#", imgSrc: "/images/tabs/tab3.jpg" },
    { type: "creative", link: "#", imgSrc: "/images/tabs/tab4.jpg" },
    { type: "ideas", link: "#", imgSrc: "/images/tabs/tab5.jpg" },
    { type: "innovative", link: "#", imgSrc: "/images/tabs/tab6.jpg" },
    { type: "creative", link: "#", imgSrc: "/images/tabs/tab4.jpg" },
    { type: "ideas", link: "#", imgSrc: "/images/tabs/tab5.jpg" },
    { type: "innovative", link: "#", imgSrc: "/images/tabs/tab6.jpg" },
  ];

  const randomCols = [12, 6];

  return (
    <>
      <Row className="borderTop" gutter={[30, 30]}>
        {projectContent.map((single, index) => {
          if (type === single.type) {
            return (
              <Col key={index} span={randomCols[Math.floor(Math.random() * 2)]}>
                <div className="projectSingle">
                  <img src={single.imgSrc} alt="Tab Image" />
                  <a href={single.link}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </Col>
            );
          }
          return null;
        })}
      </Row>
      <Row className="borderBottom" gutter={[30, 30]}>
        {projectContent.map((single, index) => {
          if (type === single.type) {
            return (
              <Col key={index} span={randomCols[Math.floor(Math.random() * 2)]}>
                <div className="projectSingle">
                  <img src={single.imgSrc} alt="Tab Image" />
                  <a href={single.link}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </Col>
            );
          }
          return null;
        })}
      </Row>
    </>
  );
}

export default Project;
