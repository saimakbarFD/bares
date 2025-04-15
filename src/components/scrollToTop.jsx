// src/ScrollToTop.js
import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const navigationType = useNavigationType();

  useEffect(() => {
    // Scroll on every navigation
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [navigationType]);

  return null;
};

export default ScrollToTop;
