/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Daktronics = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RealLogoTopSection text="Daktronics" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.Daktronics} alt="Daktronics" />
            </div>
            <div className="inside-txt-bx1">
            Daktronics helps its customers to impact their audiences throughout the world with large-format LED displays, message displays, scoreboards, digital billboards, audio systems and control systems in sport, business, and transportation applications. Founded in 1968 as a USA-based manufacturing company, Daktronics has grown into the world leader in audiovisual systems and implementation with offices around the globe.
            </div>
           
            <div className="inside-space"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Daktronics