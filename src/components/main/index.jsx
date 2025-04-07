import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "antd";
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
  const [showTopbar, setShowTopbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setScrollPosition(window.scrollY);
      } else {
        setScrollPosition(0);
      }

      setShowTopbar(window.scrollY < 1000);
      console.log(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="home" className="baresHeader zi-4">
        <div className="container position-relative zi-5">
          <nav
            className={
              scrollPosition > 1000
                ? "baresNav zi-5 stickyNav"
                : "baresNav zi-5"
            }
            // style={{ top: `${scrollPosition}px` }}
          >
            {showTopbar && <Topbar />}

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
        </div>
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
