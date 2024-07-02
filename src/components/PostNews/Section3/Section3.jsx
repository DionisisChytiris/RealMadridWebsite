/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import HomeMediumItem from "../../../Templates/HomeSectionMedium/HomeMediumItem";
import Posts from "../../../../data/PostNews/Posts";
import "../postStyle.css";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import NextEvents from "../../NextEvents/NextEvents";

const Section3 = () => {
  const data1 = Posts.filter((item) => item.type == "sct3a");
  const data2 = Posts.filter((item) => item.type == "sct3b");

  const cardsRef1 = useRef(null);
  const cardsRef2 = useRef(null);

  const handleWheel1r = (event) => {
    event.preventDefault();
    if (cardsRef1.current) {
      cardsRef1.current.scrollBy({
        left: -300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };
  const handleWheel1l = (event) => {
    event.preventDefault();
    if (cardsRef1.current) {
      cardsRef1.current.scrollBy({
        left: 300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };
  const handleClick2r = (event) => {
    event.preventDefault();
    if (cardsRef2.current) {
      cardsRef2.current.scrollBy({
        left: -200, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };
  const handleClick2l = (event) => {
    event.preventDefault();
    if (cardsRef2.current) {
      cardsRef2.current.scrollBy({
        left: 200, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ margin: "50px 0px" }}>
      <div className="cnt-bt-bg-sds">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            top: 220,
            zIndex: 999,
          }}
          className="btns-ts"
        >
          {/* <div className="btns-ts"> */}
          <div onClick={handleWheel1r} className="arw-sd-btn">
            <RiArrowLeftSLine size={24} />
          </div>
          <div onClick={handleWheel1l} className="arw-sd-btn">
            <RiArrowRightSLine size={24} />
          </div>
        </div>
        <div className="mediumSectionNext" ref={cardsRef1}>
          {/* <HomeMediumItem /> */}
          <NextEvents/>
        </div>
      </div>

      <div>
        <div className="cnt-bt-bg-sds">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
              top: 150,
              zIndex: 999,
            }}
            className="btns-ts"
          >
            {/* <div className="btns-ts"> */}
            <div onClick={handleClick2r} className="arw-sd-btn">
              <RiArrowLeftSLine size={24} />
            </div>
            <div onClick={handleClick2l} className="arw-sd-btn">
              <RiArrowRightSLine size={24} />
            </div>
          </div>
          <div className="medium2Section" ref={cardsRef2}>
            {data2.map((item, index) => {
              return (
                <div key={index}>
                  <HomeMedium2
                    link={item.link}
                    img={item.img}
                    alt={item.alt}
                    title={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
