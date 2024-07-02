/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import Posts from "../../../../data/PostNews/Posts";
import "../postStyle.css";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import NextEvents from "../../NextEvents/NextEvents";

const Section3 = () => {
  const data = Posts.filter((item) => item.type == "sct3b");

  const cardsRef2 = useRef(null);

  const handleClick2r = (event) => {
    event.preventDefault();
    if (cardsRef2.current) {
      cardsRef2.current.scrollBy({
        left: -200, 
        behavior: "smooth",
      });
    }
  };
  const handleClick2l = (event) => {
    event.preventDefault();
    if (cardsRef2.current) {
      cardsRef2.current.scrollBy({
        left: 200, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ margin: "50px 0px" }}>
      <NextEvents />

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
            <div onClick={handleClick2r} className="arw-sd-btn">
              <RiArrowLeftSLine size={24} />
            </div>
            <div onClick={handleClick2l} className="arw-sd-btn">
              <RiArrowRightSLine size={24} />
            </div>
          </div>
          <div className="medium2Section" ref={cardsRef2}>
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
      </div>
    </div>
  );
};

export default Section3;
