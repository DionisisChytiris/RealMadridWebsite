/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const CocaCola = () => {
  return (
    <>
      <RealLogoTopSection text="Coca Cola" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.CocaCola} alt="CocaCola" />
            </div>
            <div className="inside-txt-bx1">
              Without a doubt the most well-known and best-selling soft drinks
              brand in the world. From Atlanta, USA, the giant has been
              providing refreshments to the whole planet for over 125 years
              thanks to its large variety of flavoured drinks. Coca-Cola has
              been the club's Official Soft Drink for more than 10 years.
            </div>
            <div className="inside-txt-bx5">
              We work closely with Coca-Cola, true to the line of sponsorship,
              with the objective of supporting the professional football teams
              as well as on a mainstream and grassroots level nationally.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CocaCola;
