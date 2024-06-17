/* eslint-disable no-unused-vars */
import React, {useRef} from "react";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import Posts from "../../../../data/PostNews/Posts";
import "../postStyle.css";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Section6 = () => {
  const data1 = Posts.filter((item) => item.type == "sct6a");
  const data2 = Posts.filter((item) => item.type == "sct6b");

  
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
    <div>
      <div>
        <div className="section6-title sct6">
          Memorabilia Santiago Bernabéu Stadium
        </div>
        <div className="cnt-bt-bg-sds">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
        <div className="medium2Section" ref={cardsRef1}>
          {data1.map((item, index) => {
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
      <div>
        <div className="section6-title-box">
          <div className="section6-title">Special features</div>
          <div>See all news -</div>
        </div>
        <div className="cnt-bt-bg-sds">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            top: 120,
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
        <div className="smallSection" ref={cardsRef2}>
          {data2.map((item, index) => {
            return (
              <div key={index}>
                <HomeSmallImg
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

export default Section6;
