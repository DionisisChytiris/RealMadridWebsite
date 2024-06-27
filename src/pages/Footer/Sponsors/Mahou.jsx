/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Mahou = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RealLogoTopSection text="Mahou" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.Mahou} alt="mahou" />
            </div>
            <div className="inside-txt-bx1">
              Mahou, the quintessential beer flavour, is synonymous with quality
              and authenticity. True to its origins, over the years it has
              managed to perfectly combine tradition with innovation, to
              guarantee the greatness with which it is associated.
            </div>
            <div className="inside-txt-bx2">
              It is one of the flagship brands of Mahou San Miguel, a 100%
              Spanish company and leader of the beer industry in Spain as well
              as the country’s most internationally recognised beer. The
              company’s 125-year history began with the creation of Mahou in
              1890. Since then, the company has not stopped growing. In 2000,
              Mahou acquired San Miguel. In 2004, it continued with the
              acquisition of Canary Island brand Reina and in 2007, with
              Cervezas Alhambra. Additionally, the business was diversified its
              portfolio with the 2011 purchase of Solán de Cabras.
            </div>
            <div className="inside-txt-title">HISTORY WITH REAL MADRID</div>
            <div className="inside-txt-bx3">
              Closely tied to Madrid, its place of origin, Mahou has grown with
              the city and has played a part in its main historical events.
              Indeed, it supported Real Madrid from the get go, kick starting a
              fruitful relationship that began during the initial years of the
              club, a partnership that has continued for over a century
              afterwards.
            </div>
            <div className="inside-txt-bx4">
              Since then, they have collaborated to share the best of sport with
              fans: the spirit to succeed and the values of teamwork. A perfect
              symbiosis between two leading brands, united by the passion and
              the pursuit of excellence in everything they do on an
              international scale. San Miguel 0´0, the non-alcoholic version of
              the well-known San Miguel brand, is the sponsor of the Real Madrid
              Basketball team.
            </div>
            <div className="inside-space"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mahou;
