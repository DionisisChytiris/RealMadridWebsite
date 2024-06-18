/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Bantrab = () => {
  return (
    <>
      <RealLogoTopSection text="Bantrab" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.Bantrab} alt="Bantrab" />
            </div>
            <div className="inside-txt-bx1">
              We were founded in 1966 with the mission of working for the
              well-being of all employees. Fifty-five years on, we are the sixth
              largest Guatemalan bank in terms of asset volume, one of the most
              profitable and we have over 4,600 employees.
            </div>
            <div className="inside-txt-bx5">
              We were founded in 1966 with the mission of working for the
              well-being of all employees. Fifty-five years on, we are the sixth
              largest Guatemalan bank in terms of asset volume, one of the most
              profitable and we have over 4,600 employees.
            </div>
            <div className="inside-txt-bx5">
              Our employees’ well-being features as one of our priorities,
              particularly during the pandemic. Our programmes and projects have
              seen us feature in various Great Place to Work® rankings:
            </div>
            <div className="inside-txt-bx5 tx">
              <span>2nd in the ranking</span> for Central American companies
              with more than 2,500 employees
            </div>
            <div className="inside-txt-bx5 tx">
              <span>9th in the ranking</span> for Central American companies for women
            </div>
            <div className="inside-txt-bx5 tx">
              <span>38th in the ranking</span> for large Latin American organisations
            </div>
            <div className="inside-txt-bx5">
              We are committed to the United Nations Sustainable Development
              Goals, especially those that relate to financial education and
              labour inclusion. We are a role-model company in the field of
              digital transformation, where we adopt an inclusive approach.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bantrab;
