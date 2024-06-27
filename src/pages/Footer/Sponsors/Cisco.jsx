/* eslint-disable no-unused-vars */
import React from 'react'
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";


const Cisco = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <RealLogoTopSection text="Cisco" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Cisco} alt="Cisco" />
          </div>
          <div className="inside-txt-bx1">
          Cisco is the worldwide leader in technology that powers the Internet. Cisco inspires new possibilities by reimagining your applications, securing your enterprise, transforming your infrastructure, and empowering your teams for a global and inclusive future.
          </div>
         

          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Cisco