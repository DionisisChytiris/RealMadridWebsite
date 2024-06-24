/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../Section1/Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";
import { assets } from "../../../assets/assets";

const Post10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
          Ninth anniversary of club's 32nd basketball league title
        </div>
        <div className="cnt-hm-tx1-md">
          On 24 June 2015, Real Madrid clinched the title against Barcelona in
          the third clash of the final series (85-90).
        </div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.NinethAvv} alt="trofeos" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 24/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
          Today marks nine years since <span>Real Madrid</span>'s 32nd
          basketball league title. Pablo Laso's side were crowned champions
          after beating Barcelona in the final. The madridistas only needed
          three games in the best-of-five series, as they won the first two at
          home and the next one on the road (78-72, 100-80 and 85-90).
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          During the Regular Season, <span>Real Madrid</span> finished top of the standings
          with a record of 27 wins and 7 defeats. In the playoffs, the Whites
          faced Herbalife Gran Canaria (quarter-finals) and Valencia Basket
          (semi-finals) before the title play-off against Barcelona. <span>Reyes</span>,
          named MVP of the season, and Llull, MVP of the final, were the stars
          of that season. <span>Real Madrid</span> enjoyed the best season in its history,
          winning the <span>European Cup</span>, the <span>league</span>, the <span>Copa del Rey</span> and the <span>Super Cup</span>. In 2015, they completed an impressive trophy haul with the <span>Intercontinental Cup</span>
          .
        </div>

        <div className="cnt-hm-video">
          <video controls style={{ width: "100%", height: "100%" }}>
            <source src="../../../assets/videoBernabeu.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Post10;
