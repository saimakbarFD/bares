import {
  faCircleUser,
  faEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col } from "antd"; // Import Ant Design's Row and Col
import SocialIcon from "../socialIcons/socialIcon";
import BaresBtn from "../main/button";

function Topbar() {
  const TopDetails = [
    {
      icon: faCircleUser,
      text: "236 Anvew, Mark Street, Newyour City",
    },
    {
      icon: faEnvelope,
      text: "Bares@gmail.com",
    },
  ];

  return (
    <Row className="BarTop" justify="space-between" align="middle">
      <Col>
        <Row gutter={[16, 16]} wrap>
          {TopDetails.map((single, index) => (
            <Col key={index}>
              <Row
                align="middle"
                className={`detailSingle ${
                  index + 1 === TopDetails.length ? "" : "border"
                }`}
              >
                <FontAwesomeIcon icon={single.icon} />
                <p>{single.text}</p>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
      <Col>
        <Row align="middle" gutter={[16, 16]}>
          <Col>
            <SocialIcon
              childClass="h-100 row flex-center-normal"
              classes="h-100 row flex-center-normal socialIcons"
            />
          </Col>
          <Col>
            <BaresBtn classes="baresBtn2">
              <FontAwesomeIcon icon={faSquarePhone} />
              <span>Free Consulting</span>
            </BaresBtn>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Topbar;
