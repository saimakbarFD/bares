import React from "react";
import Nav from "../header/nav";
import Logo from "../header/logo";
import Container from "./container";
import Topbar from "../header/topBar";
import BaresSearch from "../header/search";
import Hero from "../sections/hero";
import Row from "../main/row";
import Services from "../sections/serviceSection";
import BaresTabs from "../sections/tabs/tabs";

function Index() {
  return (
    <>
      <header className="baresHeader">
        <Container>
          <nav className="baresNav">
            <Topbar />
            <Row classes="flex-center-between navInner">
              <Logo />
              <Nav classes="row" />
              <BaresSearch />
            </Row>
          </nav>
        </Container>
        <Hero />
      </header>
      <Services />
      <BaresTabs />
    </>
  );
}

export default Index;
