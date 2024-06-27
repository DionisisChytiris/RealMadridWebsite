/* eslint-disable no-unused-vars */
import React, {useRef} from "react";
import "./Section4.css";
import "../postStyle.css";
import Posts from "../../../../data/PostNews/Posts";
import HomeLrgImg from "../../../Templates/HomeSectionLarge/HomeLargeImg";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";
import { assets } from "../../../assets/assets";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import TrophyRecord from "../../TrophyTrackRecord/TrophyRecord";

const Section4 = () => {
  const data1 = Posts.filter((item) => item.type == "section4a");
  const data2 = Posts.filter((item) => item.type == "sct4a");
  const data3 = Posts.filter((item) => item.type == "sct4b");

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
      <div className="cnt-bt-bg-sds">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            top: 180,
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
      <div className="smallSection sct4" ref={cardsRef1}>
        {data1.map((item, index) => {
          return (
            <div key={index}>
              <HomeSmallImg
                link={item.link}
                video={item.video}
                img={item.img}
                alt={item.alt}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
      </div>
      <div className="test-sct4-box">
        <div className="sct4-title top">A legendary track record</div>
        <div className="middle-section">
          <img src={assets.TrophiesCollection} />
          <div className="honours-table">
            <TrophyRecord/>
          </div>
        </div>
      </div>
      <div className="sct4-title">New official Real Madrid 24/25 Home Kit</div>
      
      {data2.map((item, index) => {
        return (
          <div key={index}>
            <HomeLrgImg
              link1={item.link}
              img={item.img}
              alt={item.alt}
              title={item.title}
            />
          </div>
        );
      })}
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
          <div onClick={handleClick2r} className="arw-sd-btn">
            <RiArrowLeftSLine size={24} />
          </div>
          <div onClick={handleClick2l} className="arw-sd-btn">
            <RiArrowRightSLine size={24} />
          </div>
        </div>
      <div className="smallSection" ref={cardsRef2}>
        {data3.map((item, index) => {
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
  );
};

export default Section4;
