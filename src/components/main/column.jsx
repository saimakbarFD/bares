import React from "react";

function Column({ children, classes, gap }) {
  return (
    <div className={classes} style={gap}>
      {children}
    </div>
  );
}

export default Column;
