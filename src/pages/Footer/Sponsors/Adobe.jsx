/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Adobe = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <RealLogoTopSection text="Adobe" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Adobe} alt="Adobe" />
          </div>
          <div className="inside-txt-bx1">
            Mahou, the quintessential beer flavour, is synonymous with quality
            and authenticity. True to its origins, over the years it has
            managed to perfectly combine tradition with innovation, to
            guarantee the greatness with which it is associated.
          </div>
         
          <div className="inside-space"/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Adobe