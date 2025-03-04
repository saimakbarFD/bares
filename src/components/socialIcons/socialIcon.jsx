import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SocialIcon({ classes, childClass }) {
  const social = [
    {
      icon: faFacebook,
      link: "#",
    },
    {
      icon: faXTwitter,
      link: "#",
    },
    {
      icon: faYoutube,
      link: "#",
    },
  ];

  return (
    <div className={classes}>
      {social.map((single, index) => {
        return (
          <a
            href={single.link}
            key={index}
            className={`${childClass} ${
              index + 1 === social.length ? "" : "border"
            }`}
          >
            <FontAwesomeIcon icon={single.icon} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcon;
