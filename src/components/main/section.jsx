import React from "react";

function Section({ children, classes, id }) {
  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

export default Section;
