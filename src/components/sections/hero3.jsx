import React from "react";
import Section from "../main/section";
import Container from "../main/container";
import { Row, Col, Layout } from "antd";
import Heading from "../main/heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import BaresBtn from "../main/button";

function Hero3() {
  return (
    <Section style={{ height: "inherit" }}>
      <Container>
        <Heading
          classes={"textDark position-relative zi-4 text-center"}
          Type={"h1"}
          tagLine={false}
          title={"Transform Text to Design in Minutes, Powered by AI"}
        />
        <p className="birzaDesc position-relative zi-4 text-center textDark">
          You're a startup founder preparing your pitch deck and you want to
          boost your credibility in front of seasoned investors. Perhaps you
          already pitched and got pushback on your projections.
        </p>
        <BaresBtn
          classes={
            "baresBtn position-relative zi-4 row flex-center-center mx-auto"
          }
        >
          More Info <FontAwesomeIcon icon={faArrowRight} />
        </BaresBtn>
        <div class="bgCircle">
          <img class="circleBG" src="/images/header/circle.png" alt="" />
          <div class="circle2">
            <img src="/images/header/mobileHand.png" alt="" />
            <img src="/images/header/circle.png" alt="" />
          </div>

          <div class="apps">
            <div class="appSingle">
              <img src="/images/header/circleImages/ai.png" alt="App" />
            </div>
            <div class="appSingle">
              <img src="/images/header/circleImages/robot.png" alt="App" />
            </div>
            <div class="appSingle">
              <img src="/images/header/circleImages/cloud.png" alt="App" />
            </div>
            <div class="appSingle">
              <img src="/images/header/circleImages/ai2.png" alt="App" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero3;
