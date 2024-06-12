/* eslint-disable no-unused-vars */
import React from "react";
import "./Section5.css";
import "../postStyle.css";
import Posts from "../../../../data/PostNews/Posts";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import HomeLrgImg from "../../../Templates/HomeSectionLarge/HomeLargeImg";

const Section5 = () => {
  const data = Posts.filter((item) => item.type == "sct5a");
  const data1 = Posts.filter((item) => item.type == "sct5b");

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
      <div className="medium2Section">
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
      <div style={imgBox} className="imgBox">
      {/* <div className="imgBox"> */}
        {/* <div className="textBernabeu">View the Stadium redevelopment work</div> */}
        <img  className='bernabeu' src="../../../../src/assets/Bernabeu.png"/>
      </div>
    </div>
  );
};

export default Section5;


const imgBox ={
    width: "100%",
    height: "680px",
    borderRadius: 0,
    background:
      "linear-gradient(to right, RGBA(19, 41, 84, 1)70%, rgba(42, 68, 113, 1))30%"
}