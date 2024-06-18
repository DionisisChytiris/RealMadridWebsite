/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Emirates = () => {
  return (
    <>
    <RealLogoTopSection text="Emirates" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Emirates} alt="Emirates" />
          </div>
          <div className="inside-txt-bx1">
            <a
              href="https://www.emirates.com/uk/english/"
              target="_blank"
            >Emirates</a> 
            {' '}is one of the fastest-growing international airlines with one of the youngest fleets in the sky and more than 400 awards for excellence worldwide, flying to over 130 destinations across 75 different countries.
          </div>
          <div className="inside-txt-bx5">
          This giant of the airline industry operates across 6 continents and employs over 50,000 people coming from 160 different nationalities, making it a multi-cultural and competitive leader within each of the territories it operates. The company’s central headquarters is in Dubai, United Arab Emirates.
          </div>
          <div className="inside-txt-bx5">
          Emirates’ ties with football include a deal with the world’s most celebrated team: Real Madrid. The company became the club’s main sponsor in 2013, having linked up with the club as global sponsors two years previously and forming part of a large-scale sponsorship strategy that has turned Emirates into an unmistakable benchmark in the world of sport.
          </div>

          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Emirates