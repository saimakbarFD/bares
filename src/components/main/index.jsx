import React from "react";
import { Row, Col } from "antd"; // Import Ant Design's Row and Col
import Nav from "../header/nav";
import Logo from "../header/logo";
import Container from "./container";
import Topbar from "../header/topBar";
import BaresSearch from "../header/search";
import Hero from "../sections/hero";
import Services from "../sections/serviceSection";
import BaresTabs from "../sections/tabs/tabs";
import About from "../sections/aboutSection";
import VidoeSection from "../sections/videoSections";
import BaresTab2 from "../sections/baresTab2";
import BlogSection from "../sections/blogSection";
import FormSection from "../sections/formSections";
import Footer from "../sections/footer";

function Index() {
  return (
    <>
      <header className="baresHeader">
        <Container style={{ zIndex: 2 }}>
          <nav class="baresNav">
            <Topbar />

            <Row justify="space-between" align="middle" className="navInner">
              <Col>
                <Logo />
              </Col>
              <Col flex="auto">
                <Nav classes="row flex-center-center" />
              </Col>
              <Col>
                <BaresSearch />
              </Col>
            </Row>
          </nav>
        </Container>
        <Hero />
      </header>
      <Services />
      <BaresTabs />
      <About />
      <VidoeSection />
      <BaresTab2 />
      <BlogSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default Index;
