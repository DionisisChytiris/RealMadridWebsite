/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Nivea = () => {
  return (
    <>
      <RealLogoTopSection text="Nivea" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.NiveaMen} alt="Nivea" />
            </div>
            <div className="inside-txt-bx1">
              Nivea is part of one of the largest multinational companies in the
              world. Its headquarters remain in Hamburg, Germany, and it was one
              of the first ever companies to make cosmetic products.
            </div>
            <div className="inside-txt-bx5">
              Through its Nivea Men division, it offers a wide range of skin
              care products for those men looking to take the take the
              initiative and go further each day, making the most of everything
              that surrounds them just like a great team always does.
            </div>
            <div className="inside-txt-bx5">
              Nivea Men joined the Real Madrid family in 2013. Both entities
              share the same universal passions with men: from their teams’ most
              important games to normal daily challenges, whether they are big
              projects or just small matters.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nivea;
