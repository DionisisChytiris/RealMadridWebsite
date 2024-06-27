/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const EASports = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <RealLogoTopSection text="EA Sports" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.EASports} alt="EA Sports" />
          </div>
          <div className="inside-txt-bx1">
          EA SPORTS™ is one of the leading sports entertainment brands in the world, with top-selling videogame franchises, award-winning interactive technology, fan programs and cross-platform digital experiences. EA SPORTS creates connected experiences that ignite the emotion of sports through videogames, including EA SPORTS™ FIFA, Madden NFL football, NHL® hockey, NBA LIVE basketball, Rory McIlroy PGA TOUR® golf, SSX™ and EA SPORTS UFC®.
          </div>
          
          <div className="inside-space"/>
        </div>
      </div>
    </div>
  </>
  )
}

export default EASports