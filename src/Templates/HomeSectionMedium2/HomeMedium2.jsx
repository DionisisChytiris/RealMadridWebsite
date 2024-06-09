/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './HomeMedium2.css'
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const MediumItem2 = ({ img, title }) => {
    return (
      <div className="containerMediumItem2">
        <div className="imgBoxM2">
          <img src={img} alt="" />
        </div>
        <div className="titleBoxM2">
          <div className="titleM">{title}</div>
        </div>
      </div>
    );
  };

const HomeMedium2 = () => {
  return (
    <div className="mainContainerM2">
      <Link to="/tickets">
        <MediumItem2 img={assets.img2} title="Test 1" />
      </Link>
      <div>
        <MediumItem2 img={assets.img3} title="Test 2 afdhj adsf adsf asdf adf asdf asdf sdf asdf  asdfasdfa ASDFSDFAS" />
      </div>
      <div>
        <MediumItem2 img={assets.img4} title="Test 4" />
      </div>
      {/* <div>
        <MediumItem img={assets.img5} title="Test 5" />
      </div> */}
    </div>
  )
}

export default HomeMedium2