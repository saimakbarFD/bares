import React from "react";
import Container from "../main/container";

function Nav({ classes }) {
  return (
    <>
      <ul className={classes}>
        <li>
          <a href="#"> Home</a>
        </li>
        <li href="#about">
          <a href="#">About</a>
        </li>
        <li href="#portfolio">
          <a href="#">Portfolio</a>
        </li>
        <li href="#services">
          <a href="#">Services</a>
        </li>
        <li href="#blog">
          <a href="#">Blog</a>
        </li>
      </ul>
    </>
  );
}

export default Nav;
