import { useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./assets/css/landingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 5000);

    const loaderDelay = 3500;
    setTimeout(() => {
      document
        .querySelector(".loaderTop")
        ?.style.setProperty("transform", "translateY(-100%)");
      document
        .querySelector(".loaderBottom")
        ?.style.setProperty("transform", "translateY(100%)");
      document
        .querySelector(".loaderTopTxt")
        ?.style.setProperty("transform", "translateY(50%) scale(5)");
      document
        .querySelector(".loaderBottomTxt")
        ?.style.setProperty("transform", "translateY(-50%) scale(5)");

      setTimeout(() => {
        loader.style.display = "none";
      }, loaderDelay + 100);
    }, loaderDelay);
  }, []);

  const demos = [
    {
      id: 1,
      src: "/images/landingPage/pages/index1.png",
      link: "/landing1",
      label: "Landing 1",
    },
    {
      id: 2,
      src: "/images/landingPage/pages/index2.png",
      link: "/landing2",
      label: "Landing 2",
    },
    {
      id: 3,
      src: "/images/landingPage/pages/index3.png",
      link: "/landing3",
      label: "Landing 3",
    },
    {
      id: 4,
      src: "/images/landingPage/pages/index4.png",
      link: "/landing4",
      label: "Landing 4",
    },
  ];

  return (
    <>
      <header className="landingPageHeader">
        <div className="container">
          <div className="landingPageLogo logo">
            <img src="/images/landingPage/icon.png" alt="Icon" />
            Bares<span>.</span>
          </div>
          <h1 className="landingHeading">
            Agency Startup HTML Multipage Landing Page Template
          </h1>
          <p className="landingDesc">
            Bares and Creative startup Agency Startup HTML Landing Page Template
            that is designed for Startups, Consultants, Consulting Businesses,
            and any other type of corporate Business Companies
          </p>
          <button className="prchButton">
            <span>Purchase Now</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
      </header>

      <div className="landingPages position-relative">
        <div className="container position-relative z-index-3">
          <article>
            <h1 className="landingHeading textDark text-center">Demos</h1>
            <p className="landingDesc text-center texGrey">
              uniquely creative and fully customizable layout
            </p>
          </article>

          <Row gutter={[16, 32]} className="mt-5">
            {demos.map((demo) => (
              <Col key={demo.id} xs={24} sm={12} md={8}>
                <Link to={`${demo.link}#`}>
                  <div className="demo">
                    <img src={demo.src} alt="Landing page" />
                  </div>
                </Link>
                <h2 className="demoType">{demo.label}</h2>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <footer className="landingPageFooter">
        <div className="container">
          <Row className="position-relative z-index-3">
            <Col md={14} className="lp-none">
              <div className="sample">
                <img src="/images/landingPage/laptop.png" alt="Sample" />
                <img src="/images/landingPage/iPhone.png" alt="Sample" />
              </div>
            </Col>
            <Col md={10} className="z-3 lp-100">
              <h1 className="landingHeading">
                Don't waste your time creating confusing HTML designs.
              </h1>
              <p className="landingDesc">
                For only $12, you already have an extraordinary landing page
                design that is 100% responsive, modern, and can be used for all
                business purposes.
              </p>
              <button className="prchButton">
                <span>Purchase Now</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
            </Col>
          </Row>
          <div className="copyright">
            2025 © Bares | Agency Startup HTML Landing Pages Template By
            Userthemes
          </div>
        </div>
        <div className="footerBG">
          <img src="/images/landingPage/footerBG.jpg" alt="Footer Background" />
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
