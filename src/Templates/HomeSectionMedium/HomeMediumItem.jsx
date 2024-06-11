/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeMediumItem.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const MediumItem = ({ img, title }) => {
  return (
    <div className="containerMediumItem">
      <div className="imgBoxM">
        <img src={img} alt="" />
      </div>
      <div className="titleBoxM">
        <div className="titleM">{title}</div>
      </div>
    </div>
  );
};

const HomeMediumItem = () => {
  return (
    <div className="mainContainerM">
      <Link to="/tickets">
        <MediumItem img={assets.img2} title="Test asfdhkjkh ljjh1" />
      </Link>
      <div>
        <MediumItem img={assets.img3} title="Test 2 afdhj adsf adsf asdf adf asdf asdf sdf asdf  asdfasdfa ASDFSDFAS" />
      </div>
      {/* <div>
        <MediumItem img={assets.img4} title="Test 4" />
      </div> */}
      {/* <div>
        <MediumItem img={assets.img5} title="Test 5" />
      </div> */}
    </div>
  );
};

export default HomeMediumItem;
