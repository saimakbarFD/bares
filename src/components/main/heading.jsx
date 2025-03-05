import React from "react";

function Heading({ Type, children, classes }) {
  return <Type className={`baresHeading ${classes}`}>{children}</Type>;
}

export default Heading;
