/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { assetsHm } from "../../assets/HomePageImages/assetsHm";
import "../PostNewsPages/Section1/Post1.css";

const CarvajalEuroopener = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
          03-0: Carvajal gets on the scoresheet as Spain wins EURO opener
        </div>
        <div className="cnt-hm-tx1-md">
          The Madrid full-back played the full 90 against Croatia alongside
          Nacho, while Modrić played 66 minutes.
        </div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.EspanaCroacia} alt="carvajal" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS.15/06/2024Mireia Jiménez</div>
        <div className="cnt-hm-tx1-noraml-sm">
          Spain started the European Championship with a victory in which{" "}
          <span>Carvajal</span> {""} was one of the scorers (3-0). The full-back
          featured in Spains starting eleven against Croatia alongside{" "}
          <span>Nacho </span> {""} . Both played the whole game, while{" "}
          <span>Modrić</span> {""} played 66 minutes for the Croatians.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Spain took the lead just before the half-hour mark. The goal came from
          Morata, who received a long ball and, under pressure from two
          defenders, managed to beat the keeper (29&apos;). Three minutes later,
          Fabián scored the second with a shot from the edge of the area
          (32&apos;). Shortly before the break, Carvajal increased the deficit
          with a shot from just inside the six-yard box. The Croatians could
          have pulled one back in the second half, but Petkovic&apos;s goal was
          disallowed by the referee after he put in the rebound from a penalty
          kick.
        </div>
      </div>
    </>
  );
};

export default CarvajalEuroopener;
