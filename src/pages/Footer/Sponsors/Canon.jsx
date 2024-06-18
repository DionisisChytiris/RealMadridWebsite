/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Canon = () => {
  return (
    <>
      <RealLogoTopSection text="Canon Medical" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.Canon} alt="Canon" />
            </div>
            <div className="inside-txt-bx1">
              True to and inspired by our Made for Life philosophy, we are
              dedicated to developing medical solutions focused on the needs and
              concerns of patients, medical professionals, customers and
              associates.
            </div>
            <div className="inside-txt-bx5">
              Canon Medical offers a wide range of diagnostic imaging solutions
              including CT scans, X-Rays, Interventional Suites, Ultrasound, MRI
              and multiple post-processing software applications.
            </div>
            <div className="inside-txt-bx5">
              Our goal is to work together with influential opinion leaders and
              industry partners to create innovative solutions and, with patient
              health at the forefront of our work, achieve results for greater
              clinical confidence while improving patient safety and comfort.
              Our relationships are based on transparency, openness and respect.
            </div>
            <div className="inside-txt-bx5">
              With a presence in more than 150 countries, over 100 years of
              experience, 5 manufacturing facilities and 11 Research and
              Development Centres, Canon Medical ranks first among Japanese
              companies and third in the US in R&D leadership.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Canon;
