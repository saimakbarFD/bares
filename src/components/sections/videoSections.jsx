import React, { useState } from "react";
import Section from "../main/section";
import Container from "../main/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "../main/heading";
import BaresBtn from "../main/button";
import BaresList from "../main/list";
import { Button, Modal } from "antd";
function VidoeSection() {
  const [video, playVideo] = useState(false);

  const showModal = (value) => {
    playVideo(value);
  };

  return (
    <>
      <Section classes="baresPadding baresVideo">
        <Container>
          <div onClick={() => showModal(!video)} className="videoBtn">
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <Heading
            classes="textCenter"
            Type="h2"
            title="Let's Create Something Great"
          />
          <BaresList classes="flex-center-center textLight" />
          <BaresBtn classes={"baresBtn"}>
            Learn More <FontAwesomeIcon icon={faArrowRight} />
          </BaresBtn>
        </Container>
      </Section>
      <Modal open={video} onCancel={() => playVideo(!video)} footer={null}>
        <iframe
          className="BaresVideo"
          src="https://www.youtube.com/embed/a3ICNMQW7Ok"
          title="Wildlife Windows 7 Sample Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
}

export default VidoeSection;
