/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import "./Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";

const Post2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">Official Announcement: Alocén</div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.Alocen} alt="trofeos" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">
          OFFICIAL ANNOUNCEMENT.18/06/2024
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Real Madrid C.F. and Carlos Alocén have agreed to call time on his
          playing career at our club.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Alocén arrived at Real Madrid in 2020 and during his 4 seasons with
          our team, he has won 8 trophies: 1 Euroleague, 2 Leagues, 1 Copa del
          Rey, and 4 Spanish Super Cups.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Real Madrid would like to thank him for his exemplary conduct and
          dedication throughout the time spent playing in our jersey and would
          like to wish him the best of luck in the next stage of his career.
        </div>
      </div>
    </>
  );
};

export default Post2;
