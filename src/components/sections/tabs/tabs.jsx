import React from "react";
import { Tabs } from "antd";
import SectionTag from "../../main/sectionTag";
import Container from "../../main/container";
import Heading from "../../main/heading";
import Section from "../../main/section";
import Project from "./tabsContent";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Creative",
    children: <Project type="creative" />,
  },
  {
    key: "2",
    label: "Innovative",
    children: <Project type="innovative" />,
  },
  {
    key: "3",
    label: "Ideas",
    children: <Project type="ideas" />,
  },
];
function BaresTabs() {
  return (
    <>
      <Section classes="baresTabs baresPadding">
        <Container>
          <SectionTag title="digital marketing" />
          <Heading
            Type="h2"
            title="Discover Our Selected Projects"
            tagLine={false}
            classes="textDark text-center w-75 mx-auto"
          />
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Container>
      </Section>
    </>
  );
}
export default BaresTabs;
