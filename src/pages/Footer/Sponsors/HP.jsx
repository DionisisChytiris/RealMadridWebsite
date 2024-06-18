/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const HP = () => {
  return (
    <>
      <RealLogoTopSection text="HP" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.HP} alt="HP" />
            </div>
            <div className="inside-txt-bx1">
              HP become the club's technology partner, and the first brand in
              our 121-year history to display its logo on the Real Madrid shirt
              sleeve, both for the men's and women's first teams and academy
              sides.
            </div>
            <div className="inside-txt-bx5">
              The alliance aims to boost the digital transformation across the
              different departments of the club and will improve the experience
              for Real Madrid fans at the Santiago Bernabéu with events
              including in-person marketing, gaming, programming, business
              management and much more.
            </div>
            <div className="inside-txt-bx5">
              The two brands also share a vision of how to improve society and
              promote dignity and inclusion through the use of sport and
              technology. HP is currently working to close the digital gap with
              a series of initiatives that foster digital equality for millions
              of people around the world, while Real Madrid is committed to
              creating a more inclusive sporting community.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HP;
