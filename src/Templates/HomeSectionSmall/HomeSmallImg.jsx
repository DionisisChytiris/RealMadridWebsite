/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../../assets/assets";
import "./HomeSmallImg.css";

const SmallImgItem = ({img, title}) => {
  return (
    <div className="containerSmlImg">
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
      <div className="titleBox">
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

const HomeSmallImg = () => {
  return (
    <div className="mainContainer">
      <div>
        <SmallImgItem img={assets.img2} title='Test 1'/>
      </div>
      <div>
        <SmallImgItem img={assets.img3} title='Test 2'/>
      </div>
      <div>
        <SmallImgItem img={assets.img4} title='Test 4'/>
      </div>
      <div>
        <SmallImgItem img={assets.img5} title='Test 5'/>
      </div>
      {/* <div>
        <SmallImgItem img={assets.img6} title='Test 6'/>
      </div>
      <div>
        <SmallImgItem img={assets.img7} title='Test 7'/>
      </div>
      <div>
        <SmallImgItem img={assets.mbappe} title='Test 8'/>
      </div>
      <div>
        <SmallImgItem img={assets.president} title='Test 9'/>
      </div> */}
    </div>
  );
};

export default HomeSmallImg;
