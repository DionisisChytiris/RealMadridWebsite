/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Hth = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <RealLogoTopSection text="HTH" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Hth} alt="HTH" />
          </div>
          <div className="inside-txt-bx1">
          HTH and Real Madrid, both influential leaders in their respective fields, are working together and integrating their resources with the common goal of shaping a better future for the digital sports sector in the APAC market.
          </div>
          <div className="inside-txt-bx5">
          HTH has a high-level platform which integrates digital sports and works with the conviction to enhance the sector.
          </div>

          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Hth