import React from "react";
import Logo from "../header/logo";
import Container from "../main/container";
import { Col, Row } from "antd";
import { height } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const footerList = [
    {
      icon: faEnvelope,
      text: "info@demo.com",
    },
    {
      icon: faPhone,
      text: "+02(0)5958969",
    },
    {
      icon: faLocation,
      text: "16 tool,lksd. lodon, envlaig",
    },
  ];

  return (
    <footer className="baresFooter">
      <div className="footerInner">
        <Container>
          <Row gutter={[20, 20]} justify={"space-between"} align={"middle"}>
            <Col>
              <Logo />
            </Col>
            <Col xl={8} md={12} sm={24}>
              <p className="baresDesc textDark">
                We believe that great design should not be our download will
                start automatically in 3 to 5 seconds
              </p>
            </Col>
            <Col>
              <ul className="footerSocial">
                {footerList.map((single, index) => {
                  return (
                    <li>
                      <a href="#">
                        <div className="icon">
                          <FontAwesomeIcon icon={single.icon} />
                        </div>
                        {single.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copyright">
        <Container>
          <Row
            style={{ height: "100%" }}
            gutter={[20, 20]}
            align={"middle"}
            justify={"space-between"}
          >
            <Col>
              <p className="baresDesc">
                Copyright @2025 Bares. All rights Reserved
              </p>
            </Col>
            <Col>
              <ul className="footerLinks">
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                *
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
