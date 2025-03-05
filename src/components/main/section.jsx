import React from "react";

function Section({ children, classes }) {
  return <section className={classes}>{children}</section>;
}

export default Section;
