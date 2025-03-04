import React from "react";
import Container from "../main/container";

function Nav() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <a href="#"> Home</a>
        </li>
        <li href="#about">About</li>
        <li href="#portfolio">Portfolio</li>
        <li href="#services">Services</li>
        <li href="#blog">Blog</li>
      </ul>
    </>
  );
}

export default Nav;
