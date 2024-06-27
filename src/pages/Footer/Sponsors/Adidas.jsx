/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";


const Adidas = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <RealLogoTopSection text="Adidas" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Adidas} alt="Adidas" />
          </div>
          <div className="inside-txt-bx1">
            <a
              href="https://www.adidas.co.uk/football"
              target="_blank"
            >adidas</a> 
            {' '}is one of the most experienced brands within the world of sport. Ever since 1924, the year the company’s founder Adi Dassler created the first athletic shoe, its research in relation to sports products in its respective fields of expertise has not ceased.
          </div>
          <div className="inside-txt-bx5">
          The adidas group, which includes other brands like Taylormade and Reebok, sponsors a whole host of sporting institutions and athletes worldwide. The company employs over 50,000 people in 160 countries, and releases 650 million top-quality products onto the market. The company’s central headquarters are located in Herzogenaurach, Germany.
          </div>
          <div className="inside-txt-bx5">
          adidas became a Real Madrid sponsor in 1998, contributing to the successes of the football and basketball teams in every category. The company extended its deal with Real Madrid in 2011, and since then the club have managed to lift the Décima and the Club World Cup among other important titles.
          </div>

          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Adidas