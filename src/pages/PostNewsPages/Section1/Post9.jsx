/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";
import { assets } from "../../../assets/assets";

const Post9 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">Mbappé signs for Real Madrid</div>
        <div className="cnt-hm-tx1-md">
          The European champions have strengthened their squad with a world
          superstar, who has enjoyed his highest scoring season with PSG (44
          goals) and has been the top scorer in the last six French league
          seasons.
        </div>
        <div className="cnt-hm-img1">
          <img src={assets.img4} alt="trofeos" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 03/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
          Kylian Mbappé (Paris, France; 20/12/1998) has joined Real Madrid. An
          international star has signed for the European champions, who, at the
          age of 25, has just enjoyed his highest scoring season with Paris
          Saint-Germain (44 goals) and has finished as top scorer of the French
          league for the sixth consecutive season (27 goals).
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          The Whites have strengthened their squad with a top striker, captain
          of the French national team, with whom he won the World Cup in 2018
          and the Nations League in 2021, for which he scored the winning goal.
          At the 2022 World Cup in Qatar, Mbappé claimed the Golden Boot with 8
          goals and, after his hat-trick in the final, became the all-time top
          scorer in World Cup finals (4).
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          Mbappé is Paris Saint-Germain's all-time leading scorer with 256
          goals, and this season he has won the league title, the French Cup and
          the French Super Cup. In seven years at the French club, he has
          amassed 17 trophies: League (6), French Cup (4), French Super Cup (5)
          and League Cup (2).
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>Honours</span>
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
          On an individual level, Mbappé has been included four times in the
          FIFA FIFPro World 11 (2018, 2019, 2022 and 2023) and four times in the
          UEFA Champions League team of the season (2016/17, 2019/20, 2020/21
          and 2021/22). In addition, in 2017 he picked up the Golden Boy award
          for the best player under the age of 21 and the UNFP (National Union
          of Professional Footballers) has named him best player in the French
          championship on five occasions (2019, 2021, 2022, 2023 and 2024).
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>His early years</span>
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
          Before joining PSG, Mbappé made his mark at Monaco. He joined the
          youth ranks in 2013, made his first-team debut at the age of 16 and
          scored his first goal at 17. He won the first of his seven French
          league titles in the 2016/17 campaign and made his Champions League
          debut at the age of 17 against Bayer Leverkusen. The striker scored
          his first goal in this competition on 21 February 2017 against
          Manchester City, scoring six goals in that edition. Mbappé also
          impressed at an early age with his national team and, before making
          his senior debut, he was one of the key players in France's U19
          European Championship triumph in 2016.
        </div>
        <div className="cnt-hm-tx1-noraml-underline">
          <span>Clubs</span>
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">-Monaco (2013-2017)</div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">-PSG (2017-2024)</div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
          -Real Madrid (2024- )
        </div>
        <div className="cnt-hm-tx1-noraml-underline">
          <span>Silverware list</span>
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">-1 World Cup with the French national team</div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">-1 Nations League</div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
        -7 French Leagues
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">-4 French Cups</div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">-5 French Super Cups</div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">-2 League cups</div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">-1 European Under-19s Championship</div>

        <div className="cnt-hm-video">
          <video controls style={{ width: "100%", height: "100%" }}>
            <source src="../../../assets/videoBernabeu.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Post9;
