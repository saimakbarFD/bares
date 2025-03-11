import React from "react";
import Column from "../../main/column";
import Row from "../../main/row";

function Project({ type }) {
  const projectContent = [
    {
      type: "creative",
      link: "#",
      imgSrc: "/images/tabs/tab1.jpg",
    },
    {
      type: "innovative",
      link: "#",
      imgSrc: "/images/tabs/tab2.jpg",
    },
    {
      type: "ideas",
      link: "#",
      imgSrc: "/images/tabs/tab3.jpg",
    },
    {
      type: "creative",
      link: "#",
      imgSrc: "/images/tabs/tab4.jpg",
    },
    {
      type: "ideas",
      link: "#",
      imgSrc: "/images/tabs/tab5.jpg",
    },
    {
      type: "innovative",
      link: "#",
      imgSrc: "/images/tabs/tab6.jpg",
    },
  ];

  const randomCols = ["col-6", "col-3"];

  return (
    <>
      <Row classes="borderTop">
        {projectContent.map((single, index) => {
          if (type === single.type) {
            return (
              <Column
                key={index}
                classes={randomCols[Math.floor(Math.random() * 2)]}
                gap={
                  projectContent.length === index + 1
                    ? { paddingRight: 0, paddingBottom: 30 }
                    : { paddingRight: 30, paddingBottom: 30 }
                }
              >
                <div className="projectSingle">
                  <img src={single.imgSrc} alt="Tab Image" />
                  <a href={single.link}></a>
                </div>
              </Column>
            );
          }
        })}
      </Row>
      <Row classes="borderBottom">
        {projectContent.map((single, index) => {
          if (type === single.type) {
            return (
              <Column
                key={index}
                classes={randomCols[Math.floor(Math.random() * 2)]}
                gap={
                  projectContent.length === index + 1
                    ? { paddingRight: 0, paddingBottom: 30 }
                    : { paddingRight: 30, paddingBottom: 30 }
                }
              >
                <div className="projectSingle">
                  <img src={single.imgSrc} alt="Tab Image" />
                  <a href={single.link}></a>
                </div>
              </Column>
            );
          }
        })}
      </Row>
    </>
  );
}

export default Project;
