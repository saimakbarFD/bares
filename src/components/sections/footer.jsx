import React from "react";
import Logo from "../header/logo";
import Container from "../main/container";
import { Col, Row } from "antd";
import { height } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="baresFooter">
      <div className="footerInner">
        <Container>
          <Row gutter={[20, 20]} justify={"space-between"} align={"middle"}>
            <Col>
              <Logo />
            </Col>
            <Col span={8}>
              <p className="baresDesc textDark">
                We believe that great design should not be our download will
                start automatically in 3 to 5 seconds
              </p>
            </Col>
            <Col>
              <ul className="footerSocial">
                <li>
                  <a href="#">
                    <div className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    info@demo.com
                  </a>
                </li>
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
                  <a href="#">Terms & Condition</a>
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
