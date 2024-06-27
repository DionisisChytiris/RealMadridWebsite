/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Softtek = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <RealLogoTopSection text="Softtek" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Softtek} alt="Softtek" />
          </div>
          <div className="inside-txt-bx1">
          Softtek was founded in 1982 by a small group of entrepreneurs, starting its activities in Mexico providing local IT services. The company has now become a global leader in next-generation digital solutions, becoming the first organisation to introduce the Nearshore model. Softtek supports Global 2000 companies in developing digital capabilities in a seamless and consistent manner, from ideas and construction to execution and evolution. Thanks to its entrepreneurial drive, Softtek now operates in more than 20 countries and employs more than 15,000 professionals. Find out how Softtek creates value through technology at <a href="https://www.softtek.com/en-gb/" target="_blank">
          www.softtek.com 
              </a> and connect with @Softtek on social media. 
            </div>
          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Softtek