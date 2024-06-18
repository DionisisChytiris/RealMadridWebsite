/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import "./Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";

const Post4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
          0-1: Mbappé and Camavinga help France defeat Austria
        </div>
        <div className="cnt-hm-tx1-md">
          The two Real Madrid players were instrumental in helping their
          national team to three points in their European Championship opener.
        </div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.MbappeNd} alt="trofeos" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 17/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>Mbappé</span> {""}
          and <span>Camavinga</span> {""} were involved in France's win over
          Austria in their EURO opener at the Espirit Arena in Düsseldorf. The
          striker started the game and his cross led to the winning goal, while
          the midfielder came on in the second half.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          France had the upper hand in the first half and created the most
          clear-cut chances. Their persistence paid off just before half-time.
          In the 37th minute, an own goal by Wöber as he attempted to clear
          Mbappé's cross gave France the lead. In the second half, France pushed
          for a second goal. Mbappé found himself one-on-one with the goalkeeper
          but he fired wide. Camavinga came on for Rabiot in the 70th minute,
          while Mbappé had to be substituted late on after sustaining a knock on
          the nose.
        </div>
      </div>
    </>
  );
};

export default Post4;
