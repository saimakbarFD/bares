import React from "react";

function Row({ children, classes }) {
  return <div className={`row ${classes}`}>{children}</div>;
}

export default Row;
