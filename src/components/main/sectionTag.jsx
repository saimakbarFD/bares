import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SectionTag({ icon, title }) {
  return (
    <div className={icon ? "baresTag baresTag2" : "baresTag"}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {title}
    </div>
  );
}

export default SectionTag;
