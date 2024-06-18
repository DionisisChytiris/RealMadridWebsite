/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const PlayStaion = () => {
  return (
    <>
      <RealLogoTopSection text="Playstation" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.Playstation} alt="Playstation" />
            </div>
            <div className="inside-txt-bx1">
              PlayStation®, leading entertainment brand, has become a benchmark
              in the world of video games and popular culture since its birth in
              Japan in 1994. Throughout its more than 26 years of existence,
              PlayStation® has enabled all players to experience and explore
              infinite universes where everything is possible and where gaming
              has no limits.
            </div>
            <div className="inside-txt-bx5">
              PlayStation®, in its constant search for new ways to entertain and
              excite, wants to continue to provide its millions of players with
              new adventures through the most innovative and immersive
              experiences in the world of entertainment. By joining forces,
              PlayStation® wants to reinforce its commitment to the values that
              have made the brand successful: excellence, excitement and
              breaking down the barriers and limits of the unimaginable.
            </div>
            <div className="inside-txt-bx5">
              Known around the world as an innovative brand that never fails to
              amaze its players year after year, PlayStation brings together its
              entire ecosystem with Real Madrid FC, making PlayStation®4 and
              PlayStation®5 the official consoles of Real Madrid FC.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayStaion;
