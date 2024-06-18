/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import "./Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";
import { assets } from "../../../assets/assets";

const Post1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
          La Decimoquinta, La Liga and the Spanish Super Cup, three trophies for
          Real Madrid in 2023/24.
        </div>
        <div className="cnt-hm-tx1-md">
          Our team produced a spectacular campaign and furthered its dominance
          in Europe and Spain.
        </div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.Trofeos} alt="trofeos" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 16/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>Real Madrid</span> {""}
          brought the 2023/24 season to a close with another three trophies in
          their trophy cabinet: the 15th European Cup, the 36th La Liga title
          and the 13th Spanish Super Cup. Adding to its reputation as the
          greatest club in history, our team has strengthened its dominance in
          the major competitions in Europe and Spain.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>Ancelotti's</span> {""}
          side made it to the <span>Champions League</span> {""} final after
          getting through three tough knockout rounds. Leipzig were our
          opponents in the round of 16, and our team came out on top with a 2-1
          aggregate win. We faced Manchester City in the quarter-finals, in a
          hectic encounter that began at the Bernabéu with a great match and was
          settled in the away leg on penalties. The semi-finals saw the
          madridistas face Bayern München. The Germans went ahead, but a late
          Joselu brace sent Real Madrid through to the final. Then, at Wembley,
          Carvajal and Vini Jr. got the goals in a 2-0 win over Borussia
          Dortmund.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>The 36th La Liga title</span>
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
          La Liga was wrapped up mathematically on 4 May 2024. Our team sealed
          the title thanks to a 3-0 win over Cádiz, with four games remaining in
          the competition. <span>Ancelotti's</span> {""} men dominated key games
          such as the two Clásicos. <span>Bellingham</span> {""} scored twice in
          Montjuïc to turn the game around (1-2) and in the second game, the
          team pulled off another great comeback at the{" "}
          <span>Santiago Bernabéu</span> {""} (3-2). Real Madrid were also the
          team that conceded the fewest goals, beating their clean sheet record,
          and scored the most in the competition.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>The 13th Spanish Super Cup</span>
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
          <span>Real Madrid</span> {""} won their 13th Spanish Super Cup on 14
          January 2024. Ancelotti's men beat Barcelona in the final in Riyadh by
          an overwhelming 4-1, thanks to a hat-trick from Vini Jr, MVP in the
          final, and another goal from <span>Rodrygo</span>. Before that, Madrid
          overcame Atletico in the semi-finals (5-3) in a match that was decided
          in extra time.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>Records</span>
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
          Following the winning of {""}
          <span>La Decimoquinta, Nacho, Modrić,</span> {""}
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
          <span>Kroos</span> {""} and {""}
          <span>Carvajal</span> {""} joined <span>Gento's</span> {""}record of
          six European Cups. Nacho and Modrić also enhanced their Real Madrid
          status by becoming the two players to have won the most trophies in
          the club's history (26). Ancelotti, meanwhile, also added to his
          record with five European Cups and 13 trophies as a Real Madrid coach.
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

export default Post1;
