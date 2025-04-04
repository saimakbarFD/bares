import React, { useEffect, useRef, useState } from "react";

function Heading({ Type, title, classes, tagLine }) {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headingRef.current) {
        const parentElement = headingRef.current.parentElement;
        const parentRect = parentElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (parentRect.top >= 0 && parentRect.top <= viewportHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Type
        ref={headingRef}
        className={`baresHeading ${
          tagLine ? `borderHeading ${classes}` : classes
        } ${isVisible ? "visibleClass" : ""}`}
      >
        {tagLine && <span>{tagLine}</span>}
        {title}
      </Type>
    </div>
  );
}

export default Heading;
