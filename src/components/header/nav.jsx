import React, { useState } from "react";
import Container from "../main/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Nav({ classes }) {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(false);
  };

  const nav = (
    <ul className={classes}>
      <li>
        <a onClick={handleNav} href="#home">
          Home
        </a>
      </li>
      <li>
        <a onClick={handleNav} href="#about">
          About
        </a>
      </li>
      <li>
        <a onClick={handleNav} href="#portfolio">
          Portfolio
        </a>
      </li>
      <li>
        <a onClick={handleNav} href="#services">
          Services
        </a>
      </li>
      <li>
        <a onClick={handleNav} href="#blog">
          Blog
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <div className="desktopNav">{nav}</div>

      <div className="mobileNav">
        {mobileNav && (
          <div className="mobileNavInner">
            {nav}
            <FontAwesomeIcon
              onClick={() => setMobileNav(false)}
              icon={faClose}
            />
          </div>
        )}

        <FontAwesomeIcon onClick={() => setMobileNav(true)} icon={faBars} />
      </div>
    </>
  );
}

export default Nav;
