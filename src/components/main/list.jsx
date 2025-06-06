import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BaresList({ classes }) {
  const list = [
    {
      text: "Data & Analytics",
      icon: faCheckCircle,
    },
    {
      text: "DevOps & Cloud",
      icon: faCheckCircle,
    },
  ];

  return (
    <ul className={`baresList ${classes}`}>
      {list.map((single, index) => {
        return (
          <li key={index}>
            <FontAwesomeIcon icon={single.icon} />
            {single.text}
          </li>
        );
      })}
    </ul>
  );
}

export default BaresList;
