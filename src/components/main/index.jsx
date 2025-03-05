import React from "react";
import Nav from "../header/nav";
import Logo from "../header/logo";
import Container from "./container";
import Topbar from "../header/topBar";
import BaresSearch from "../header/search";
import Hero from "../sections/hero";
import Row from "../main/row";

function Index() {
  return (
    <>
      <header className="baresHeader">
        <Container>
          <nav className="baresNav">
            <Topbar />
            <Row classes="row flex-center-between navInner">
              <Logo />
              <Nav classes="row" />
              <BaresSearch />
            </Row>
          </nav>
        </Container>
        <Hero />
      </header>
    </>
  );
}

export default Index;
