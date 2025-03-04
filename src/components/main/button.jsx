import React, { useRef, useState } from "react";

function BaresBtn({ children, classes }) {
  const [hover, setHover] = useState({
    top: "",
    left: "",
    active: false,
  });
  const childElement = useRef(null);

  const buttonHover = (e, type) => {
    let btnPosition = e.target.getBoundingClientRect();
    let relX = e.clientX - btnPosition.left;
    let relY = e.clientY - btnPosition.top;
    setHover({ top: relY, left: relX, active: type });
  };

  return (
    <button
      ref={childElement}
      className={`baresButtonE ${classes}`}
      onMouseOver={(e) => buttonHover(e, true)}
      onMouseLeave={(e) => buttonHover(e, false)}
    >
      <span className="position-relative zi-3">{children}</span>
      <span
        className={`baresButton-hover ${
          hover.active ? "explode-circle" : "desplode-circle"
        }`}
        style={{ top: hover.top, left: hover.left }}
      ></span>
    </button>
  );
}

export default BaresBtn;
