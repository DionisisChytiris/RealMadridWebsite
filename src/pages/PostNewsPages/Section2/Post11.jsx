/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../Section1/Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";
import { assets } from "../../../assets/assets";

const Post11 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
        Alaba turns 32
        </div>
        <div className="cnt-hm-tx1-md">
        The Austrian has won nine trophies in three seasons with Real Madrid.
        </div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.Alaba32} alt="Alaba" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 24/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
           <span>David Alaba</span>
            celebrates his 32nd birthday today. The defender was born in Vienna (Austria) on 24 June 1992 and joined our club in the summer of 2021, appearing in 102 games for <span>Real Madrid</span> so far. He has won three trophies in every season as a madridista. The first one finished with a <span>Champions League, league</span> title and <span>Spanish Super Cup</span> treble and in the following campaign, he picked up three more titles: the <span>Club World Cup</span>, the <span>Uefa Super Cup</span> and the <span>Copa del Rey</span>. In the last one, he added another <span>Champions league</span> crown, another <span>LaLiga</span> title and another <span>Spanish Super Cup</span> to his trophy cabinet.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
           <span>Alaba</span>
           was signed from Bayern Munich and made his official debut for <span>Real Madrid</span> on 14 August 2021 in <span>LaLiga</span> against Alavés. He has also scored five goals for the Whites. <span>Alaba</span> has appeared for Austria since he was 17 and has already made over 100 appearances for his country.  
        </div>
       
      </div>
    </>
  );
};

export default Post11;
