/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import "../Section1/Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";
import { assets } from "../../../assets/assets";

const Post18 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
        Real Madrid named Forbes' most valuable club in world football for the third consecutive year
        </div>
        <div className="cnt-hm-tx1-md">
        Our club tops the list with a value of 6.6 billion dollars.
        </div>
        <div className="cnt-hm-img1">
          <img src={assets.ForbesClub} alt="trofeos" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 23/05/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
          
          For the third year in a row, <span>Real Madrid</span> {""} has been named the most valuable football club in the world by Forbes, with a value of 6.6 billion dollars. The prestigious publication notes in its annual report that our club's value has grown by 9% on last year's figure. It also highlights that <span>Real Madrid</span> {""} has taken more revenue than any other team (873 million dollars), won 5 of the last 10 <span>Champions Leagues</span> {""}, and earns an average of 205 million dollars a year in shirt sponsorships, the highest figure in football according to Football Benchmark.
        </div>
       
      </div>
    </>
  );
};

export default Post18;
