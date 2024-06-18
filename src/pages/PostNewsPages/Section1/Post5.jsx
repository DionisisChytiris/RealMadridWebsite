/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import "./Post5.css";
import "./Post1.css";
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";

const Post5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
          Here is the new 2024-25 season jersey
        </div>
      
        <div className="cnt-hm-img1">
          <img src={assetsHm.HomeJersey} alt="jersey" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 05/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>Real Madrid</span> {""} and <span>adidas</span> {""}
          present the 2024-25 season jersey. This time, it's a minimalist design where the white colour incorporates a custom houndstooth pattern with the initials RM. The kit's detailing is in black, such as the sponsor, the adidas logo, the shoulder stripes and the V-neckline.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          
          The jersey, which with its clean design references <span>Real Madrid</span> {""}'s DNA, is made from the most advanced materials and features HEAT.RDY technology, which regulates air flow to keep players cool during matches.
        </div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>On sale now</span>
        </div>
        <div className="cnt-hm-tx1-noraml-sm-nospace">
        The new jersey is <a href="/">on sale now at Real Madrid and adidas shops</a>, as well as other selected retailers.
        </div>
        <div className="cnt-hm-video">
          <video controls style={{ width: "100%", height: "100%" }}>
            <source src='../../../assets/videoBernabeu.mp4' type="video/mp4" />
          </video>
        </div>
        <div className="cnt-hm-post5-tl-gr">Camiseta del Real Madrid de 2024-25</div>
        <div className="cnt-hm-post5-tl-phts">
          <img src={assetsHm.HomeJersey} className='img1'alt=""/>
          <img src={assetsHm.photo2} className='img2'alt=""/>
          <img src={assetsHm.photo3} className='img3'alt=""/>
          <img src={assetsHm.photo4} className='img4'alt=""/>
          <img src={assetsHm.photo5} className='img5'alt=""/>
          <img src={assetsHm.photo6} className='img6'alt=""/>
          <img src={assetsHm.photo7} className='img7'alt=""/>
          <img src={assetsHm.photo8} className='img8'alt=""/>
          <img src={assetsHm.photo9} className='img9'alt=""/>
          <img src={assetsHm.photo10} className='img10'alt=""/>
          <img src={assetsHm.photo11} className='img11'alt=""/>
          <div className='img12'/>
          {/* <div className='img13'/> */}
          {/* <img src={assetsHm.photo11} className='img11'alt=""/> */}
          <img src={assetsHm.photo11} className='img13'alt=""/>
        </div>
      </div>
    </>
  );
};

export default Post5;
