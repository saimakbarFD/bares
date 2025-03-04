import React from "react";
import Nav from "../header/nav";
import Logo from "../header/logo";
import Container from "./container";

function Index() {
  return (
    <>
      <header>
        <Container>
          <Logo />
          <Nav />
        </Container>
      </header>
    </>
  );
}

export default Index;
