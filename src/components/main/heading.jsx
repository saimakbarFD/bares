import React from "react";

function Heading({ Type, title, classes, tagLine }) {
  return (
    <Type
      className={`baresHeading ${
        tagLine ? `borderHeading ${classes}` : classes
      }`}
    >
      {tagLine && <span>{tagLine}</span>}
      {title}
    </Type>
  );
}

export default Heading;
