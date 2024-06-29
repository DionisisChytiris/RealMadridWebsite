/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { assetsHm } from "../../assets/HomePageImages/assetsHm";
import "../PostNewsPages/Section1/Post1.css";

const ArdaGuler = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div className="cnt-hm-sct1-pt1">
      <div className="cnt-hm-tx1-lg">
      Arda Güler has been nominated for Golden Boy 2024
      </div>
      <div className="cnt-hm-tx1-md">
      The Real Madrid player is among the shortlist of 100 candidates in the running for the ‘Tuttosport’ award.


      </div>
      <div className="cnt-hm-img1">
        <img src={assetsHm.AlavesAlegria} alt="carvajal" />
      </div>
      <div className="cnt-hm-tx1-extra-sm">NEWS. 06/06/2024</div>
      <div className="cnt-hm-tx1-noraml-sm">
      Arda {" "}
        <span>Güler</span> {""} has been nominated for the Golden Boy 2024 Award, which is presented by Tuttosport for the most outstanding footballer signed to a European club and born on or after 1 January 2004. The <span>Real Madrid</span>  player is one of 100 candidates shortlisted for the prestigious award, which team-mate <span>Bellingham</span>  won last year. The Italian publication will be updating the list of candidates every month until October.
      </div>
    
    </div>
  </>
  )
}

export default ArdaGuler