import {
  faCircleUser,
  faEnvelope,
  faSquareEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Row from "../main/row";
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
    <>
      <Row classes="BarTop row flex-wrap flex-normal-between">
        <Row classes="row flex-wrap">
          {TopDetails.map((single, index) => {
            return (
              <Row
                key={index}
                classes={`row flex-center-start detailSingle ${
                  index + 1 === TopDetails.length ? "" : "border"
                }`}
              >
                <FontAwesomeIcon icon={single.icon} />
                <p>{single.text}</p>
              </Row>
            );
          })}
        </Row>
        <Row classes="row flex-wrap flex-center-start">
          <SocialIcon
            childClass="h-100 row flex-center-normal"
            classes="h-100 row flex-center-normal socialIcons"
          />
          <BaresBtn classes="baresBtn2">
            <FontAwesomeIcon icon={faSquarePhone} />
            <span>Free Consulting</span>
          </BaresBtn>
        </Row>
      </Row>
    </>
  );
}

export default Topbar;
