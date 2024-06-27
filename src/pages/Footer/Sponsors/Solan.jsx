/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Solan = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RealLogoTopSection text="Solan de Cabras" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.Solan} alt="Solan" />
            </div>
            <div className="inside-txt-bx1">
              Solán de Cabras mineral water is a product of the Mahou San Miguel
              Group. It is a natural spring water that is good for your health
              and which reflects a lifestyle choice. Its bottles are an
              unmistakable symbol of identity and the medicinal properties of
              its minerals have been recognised since the XVIII century. Its
              unique properties, which derive from the altitude of the Cuenca
              Mountains and the fact that it has been in the ground for more
              than 400 years, give it a perfect mineral balance and a really
              great taste. For Solán de Cabras, the Official Water of Real
              Madrid, if looking after our health is important on a day to day
              basis, then the hydration for elite sportsmen is essential. Health
              and sporting traditions come together, and the little blue bottle
              next to Whites players has been iconic for almost 15 years.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Solan;
