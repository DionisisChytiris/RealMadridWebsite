/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import Posts from "../../../../data/PostNews/Posts";
import "../postStyle.css";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Section2 = () => {
  const data = Posts.filter((item) => item.type == "c");

  const cardsRef = useRef(null);

  const handleWheel1r = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left: -100, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };
  const handleWheel1l = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left: 100, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };


  // useEffect(() => {
  //   cardsRef.current.addEventListener("click", handleWheel1r);
  //   cardsRef.current.addEventListener("click", handleWheel1l);
  // }, []);
  return (
    <div className="cnt-bt-bg-sds">
      <div
        style={{
          position: "relative",
          top: 140,
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
      <div className="medium2Section" ref={cardsRef}>
        {data.map((item, index) => {
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
  );
};

export default Section2;
