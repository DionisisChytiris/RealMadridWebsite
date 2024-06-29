/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import { assetsHm } from '../../assets/HomePageImages/assetsHm'
import '../PostNewsPages/Section1/Post1.css'

const BrahimAdidas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div className="cnt-hm-sct1-pt1">
      <div className="cnt-hm-tx1-lg">
      Discover the adidas F50 collection
      </div>
     
      <div className="cnt-hm-img1">
        <img src={assetsHm.BrahimAdidas} alt="carvajal" />
      </div>
      <div className="cnt-hm-tx1-extra-sm">NEWS. 17/06/2024</div>
      <div className="cnt-hm-tx1-noraml-sm">
        To celebrate the 20th anniversary of the F50 boot, adidas has launched three new models of this classic model: the F50 Elite Laced, F50 Elite Laceless and F50 Mid W Elite. All feature Sprintframe 360, an outsole plate that promotes optimised stability and traction, and are designed to secure the foot during push-off, facilitating multi-directional speed and acceleration. The application of the latest technological advances in their manufacture improves the fit on the foot and ball control when dribbling at speed. They are available in lace-up and laceless versions.
      </div>
      <div className="cnt-hm-tx1-noraml-sm">
      Brahim, Joselu, Lucas Vazquez, Fran Garcia, Athenea, Olga and Linda Caicedo are some of the madridistas who wear these boots. The mostly white silhouette embodies their lightness, while the solar red and lucid blue details on the sides add a flashing effect when the players run.
      </div>
      <div className="cnt-hm-tx1-noraml-sm">
      The F50 Mid W Elite is designed for a female foot. The ultra-soft tongue collar offers an adaptive fit around the ankle for stability and comfort. In addition, an extra sockliner has been added to the upper part to stabilise foot movement within the boot, providing optimal arch support and a tailored fit for women footballers of all levels.
      The new F50 models are available at. <span>adidas stores </span> {""}
      </div>
      
    </div>
  </>
  )
}

export default BrahimAdidas