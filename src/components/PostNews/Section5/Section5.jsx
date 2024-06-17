/* eslint-disable no-unused-vars */
import React, {useRef} from "react";
import "./Section5.css";
import "../postStyle.css";
import Posts from "../../../../data/PostNews/Posts";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import HomeLrgImg from "../../../Templates/HomeSectionLarge/HomeLargeImg";
import { FaArrowRight } from "react-icons/fa6";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Section5 = () => {
  const data = Posts.filter((item) => item.type == "sct5a");
  const data1 = Posts.filter((item) => item.type == "sct5b");

  
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


  return (
    <div>
      {data.map((item, index) => {
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
          position: "relative",
          top: 160,
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
      <div style={imgBoxSct5} className="imgBox-sct5">
        <div className="text-container-sct5">
          <div className="textBernabeu">
            View the Stadium redevelopment work
          </div>
          <div className='text-bernb-cnt'>
            <div className="text-bernb-frs">Bernabéu Stadium</div>
            <div className="text-bernb-scd">
              <FaArrowRight color="white" size={18} />
            </div>
          </div>
        </div>
        <div className="sct5-btn-cnt-bernb">
          <p className="txt-1">text 1</p>
          <p className="txt-2">text 3</p>
          <p className="txt-3">text 2</p>
          <p className="txt-4">text 4</p>
        </div>
        <img className="bernabeu" src="../../../../src/assets/Bernabeu.png" />
      </div>
    </div>
  );
};

export default Section5;

const imgBoxSct5 = {
  background: "linear-gradient(to right, RGBA(19, 41, 84, 1)70%, #566d95)30%",
};
