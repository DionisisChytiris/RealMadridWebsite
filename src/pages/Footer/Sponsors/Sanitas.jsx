/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Sanitas = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RealLogoTopSection text="Sanitas" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.Sanitas} alt="Sanitas" />
            </div>
            <div className="inside-txt-bx1">
              Sanitas is a specialist in health and wellness services in Spain.
              It offers its clients products and services adapted to the real
              needs of people at every stage of their lives through a
              comprehensive health model that includes: medical insurance,
              hospitals and multi-specialty centres, wellness centres, dental
              clinics, other services health and elder care services.
            </div>
            <div className="inside-txt-bx5">
              The company has 10,600 employees, has a medical team composed of
              more than 40,000 specialists and 1,200 medical centres, as well as
              a private provision of 4 hospitals, 20 multi-specialty medical
              centres, 16 wellness centres, 180 dental clinics, 45 dental
              residences. And 17 day centres.
            </div>
            <div className="inside-txt-bx5">
              Sanitas is part of Bupa, a leading international healthcare
              company, serving more than 16.5 million policyholders, 10.6
              million patients and 33,100 senior citizens, whose purpose is a
              longer, healthier and happier life.
            </div>
            <div className="inside-txt-bx5">
              The alliance of 15 years between Sanitas and Real Madrid puts at
              the disposal of the club its medical knowledge as expertise in
              sports medicine, the most sophisticated technological and
              healthcare advances in the market and its network of hospitals and
              medical centres to ensure that all players are in the best
              physical conditions each season.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sanitas;
