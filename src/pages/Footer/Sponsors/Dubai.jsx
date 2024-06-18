/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Dubai = () => {
  return (
    <>
      <RealLogoTopSection text="Dubai" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.Dubai} alt="mahou" />
            </div>
            <div className="inside-txt-bx1">
              Aiming ultimately to make Dubai the world&apos;s leading business hub,
              investment centre and tourism destination, the Dubai Department of
              Economics and Tourism (DET) has been tasked with helping the
              government to position the city as a leading global economic and
              tourism hub. It is also working to boost the city&apos;s economic and
              tourism competitiveness indicators, aligned with the objectives of
              the Dubai Economic Agenda, D33, which aims to double the size of
              the economy and consolidate its position among the world&apos;s top
              three cities over the next decade.
            </div>
            <div className="inside-txt-bx2">
              As part of this commitment, the DET is spearheading efforts to
              further enhance Dubai&apos;s diversified and innovative service-based
              economy to attract the world&apos;s finest talent, provide a
              world-class business environment and accelerate productivity
              growth. In addition, the DET supports Dubai&apos;s vision to become the
              world&apos;s best city to live and work in by championing its diverse
              destination offerings, unique lifestyle and overall outstanding
              quality of life.
            </div>

            <div className="inside-txt-bx2">
              Find out more about Visit Dubai at <a href="https://www.visitdubai.com/en" target="_blank">
                www.visitdubai.com
              </a>
            </div>
            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dubai;
