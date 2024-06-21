/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";

const Post6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
          Official Announcement: Sergio Rodríguez
        </div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.Sergio} alt="Sergio" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">
          OFFICIAL ANNOUNCEMENT.19/06/2024
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Following Sergio Rodríguez's announcement that he will be retiring
          from professional basketball, Real Madrid C. F. would like to extend
          our gratitude, warmth and admiration to one of the biggest legends
          both of our club and of European basketball.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Sergio Rodríguez has been a key player during one of the most
          successful periods in our history.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          During his eight seasons wearing our jersey, shared over two periods
          (2010-2016) and (2022-2024), Sergio Rodríguez has won 17 trophies: 2
          Euroleagues, 1 Intercontinental Cup, 4 Leagues, 5 Copa del Rey and 5
          Spanish Super Cups. He was also Euroleague MVP and part of the best
          five in the 2013-2014 season, MVP in the 2013 Spanish Supercup and has
          been named part of the best five in the league on 3 occasions
          (2012-2013, 2013-2014 and 2015-2016).
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Over the course of his outstanding professional career, Sergio
          Rodríguez has also played in the NBA at different stages, playing for
          the Portland Trail Blazers, Sacramento Kings, New York Knicks and
          Philadelphia 76ers. In Europe, as well as Real Madrid, Sergio
          Rodríguez has played for Estudiantes, CSKA Moscow, where he won 1
          Euroleague and 2 VTB leagues, and EA7 Emporio Armani Milan, where he
          won 1 League, 2 Italian Cups and 1 Italian Supercup.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Sergio Rodríguez is also a legendary figure in the Spanish national
          team, having been capped 154 times. He was crowned World Champion at
          the 2006 World Cup in Japan and European Champion at the 2015 European
          Championship in France. He has also won 2 silver medals (2012 Olympic
          Games and 2007 European Games) and 3 bronze medals (2013 and 2017
          Europeans and 2016 Olympic Games). Individually, Sergio Rodríguez was
          named in the best five at the 2015 European Championship.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          An institutional act to pay tribute and bid farewell to Sergio
          Rodríguez will take place at Real Madrid City on Wednesday 26 June at
          12 noon, in the presence of our president Florentino Pérez.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Real Madrid would like to reiterate our warmest regards to Sergio
          Rodríguez and his family, and wish him the best of luck in this new
          chapter of his life.
        </div>
        <div className="cnt-hm-video">
          <video controls style={{ width: "100%", height: "100%" }}>
            <source src='../../../assets/videoBernabeu.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Post6;
