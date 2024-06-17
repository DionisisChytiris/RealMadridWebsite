/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import "../postStyle.css";
import Posts from "../../../../data/PostNews/Posts";
import HomeLrgImg from "../../../Templates/HomeSectionLarge/HomeLargeImg";
import HomeSmallImg from "../../../Templates/HomeSectionSmall/HomeSmallImg";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Section1 = () => {
  const data1 = Posts.filter((item) => item.type == "a");
  const data2 = Posts.filter((item) => item.type == "b");
  const data3 = Posts.filter((item) => item.type == "b");

  const cardsRef1 = useRef(null);
  const cardsRef2 = useRef();

  const handleWheel1r = (event) => {
    event.preventDefault();
    // cardsRef1.current.scrollLeft += event.deltaY;
    if (cardsRef1.current) {
      cardsRef1.current.scrollBy({
        left: -300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
    // alert("right");
  };
  const handleWheel1l = (event) => {
    event.preventDefault();
    // cardsRef1.current.scrollLeft -= event.deltaY;
    if (cardsRef1.current) {
      cardsRef1.current.scrollBy({
        left: 300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
    // alert("left");
  };
  const handleClick2r = (event) => {
    event.preventDefault();
    // cardsRef1.current.scrollLeft += event.deltaY;
    if (cardsRef2.current) {
      cardsRef2.current.scrollBy({
        left: -300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
    // alert("right");
  };
  const handleClick2l = (event) => {
    event.preventDefault();
    // cardsRef1.current.scrollLeft -= event.deltaY;
    if (cardsRef2.current) {
      cardsRef2.current.scrollBy({
        left: 300, // Adjust the value as needed
        behavior: "smooth",
      });
    }
    // alert("left");
  };

  // const handleWheel2 = (event) => {
  //   event.preventDefault();
  //   cardsRef2.current.scrollLeft += event.deltaY;
  // };

  useEffect(() => {
    cardsRef1.current.addEventListener("click", handleWheel1r);
    cardsRef1.current.addEventListener("click", handleWheel1l);
    // cardsRef2.current.addEventListener("wheel", handleWheel2);
    cardsRef2.current.addEventListener("click", handleClick2r);
    cardsRef2.current.addEventListener("click", handleClick2l);
  }, []);

  return (
    <div>
      <div>
        {data1.map((item, index) => {
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
        <div className="smallSection" ref={cardsRef1}>
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

      <div className="cnt-bt-bg-sds">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            top: 80,
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
      <div className="smallSection sct1b" ref={cardsRef2}>
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
  );
};

export default Section1;
