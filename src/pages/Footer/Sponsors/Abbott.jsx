/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Abbott = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <RealLogoTopSection text="Abbott" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Abbott} alt="Abbott" />
          </div>
          <div className="inside-txt-bx1">
          Abbott is a global healthcare leader that helps people live more fully at all stages of life. Our portfolio of life-changing technologies spans the spectrum of healthcare, with leading businesses and products in diagnostics, medical devices, nutritionals and branded generic medicines. Our 109,000 colleagues serve people in more than 160 countries.
          </div>
          
          <div className="inside-space"/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Abbott