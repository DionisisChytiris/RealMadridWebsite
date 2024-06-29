/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { assetsHm } from "../../assets/HomePageImages/assetsHm";
import "../PostNewsPages/Section1/Post1.css";

const BellinghamVictory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
          0-1: Bellingham delivers England victory over Serbia
        </div>
        <div className="cnt-hm-tx1-md">
          The Real Madrid player headed home the winning goal in England&apos;s
          European Championship opener
        </div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.NdSerbiaInglaterra} alt="carvajal" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 16/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
          Jude <span>Bellingham </span> {""} got off to a great start at the
          European Championship. The Real Madrid player headed the winning goal
          for England against Serbia to put his team at the top of Group C with
          three points.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          The Real Madrid player started the game and played 86 minutes.
          Bellingham put in a strong performance for Southgate&apos;s side, scoring
          the only goal in the 13th minute from Saka&apos;s cross, which he powered
          past Rajkovic. England withdrew after the goal and looked to
          counter-attack with the Real Madrid man and Saka creating threats on
          Serbia&apos;s goal. There was no change in the score in the second half and
          England, with Bellingham driving forward, picked up their first win at
          the Gelsenkirchen stadium.
        </div>
      </div>
    </>
  );
};

export default BellinghamVictory;
