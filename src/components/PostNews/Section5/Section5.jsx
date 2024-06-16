/* eslint-disable no-unused-vars */
import React from "react";
import "./Section5.css";
import "../postStyle.css";
import Posts from "../../../../data/PostNews/Posts";
import HomeMedium2 from "../../../Templates/HomeSectionMedium2/HomeMedium2";
import HomeLrgImg from "../../../Templates/HomeSectionLarge/HomeLargeImg";
import { FaArrowRight } from "react-icons/fa6";

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
