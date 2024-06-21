/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import './Post1.css'
import { assetsHm } from "../../../assets/HomePageImages/assetsHm";

const Post7 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cnt-hm-sct1-pt1">
        <div className="cnt-hm-tx1-lg">
        1-0: Carvajal leads Spain in their win over Italy to qualify for the last 16
        </div>
        <div className="cnt-hm-tx1-md">
        The Real Madrid defender played the full 90 as Spain secure top spot in the group.
        </div>
        <div className="cnt-hm-img1">
          <img src={assetsHm.Carvajal} alt="carvajal" />
        </div>
        <div className="cnt-hm-tx1-extra-sm">NEWS. 20/06/2024</div>
        <div className="cnt-hm-tx1-noraml-sm">
          <span>Carvajal </span> {""}
          played the entire game in Spain's win over Italy in Gelsenkirchen. As was the case against Croatia, the <span>Real Madrid </span> {""}
          defender started in the second game, which was decided by Calafiori's own goal in the 54th minute. Thanks to this win, Spain have secured top spot in Group B and a place in the Round of
        </div>
       
      </div>
    </>
  )
}

export default Post7