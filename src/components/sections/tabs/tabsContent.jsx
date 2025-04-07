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

  const randomCols = [6, 8, 12];

  return (
    <Row gutter={[16, 16]}>
      {(() => {
        let totalCols = 0;
        return projectContent.map((single, index) => {
          if (type === single.type) {
            const span =
              randomCols[Math.floor(Math.random() * randomCols.length)];
            totalCols += span;

            return (
              <Col key={index} xs={24} sm={span} md={span} lg={span} xl={span}>
                <div
                  className={`projectSingle ${
                    totalCols > 24 ? "borderBottom" : "borderTop"
                  }`}
                >
                  <img src={single.imgSrc} alt="Tab Image" />
                  <a href={single.link}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </Col>
            );
          }
          return null;
        });
      })()}
    </Row>
  );
}

export default Project;
