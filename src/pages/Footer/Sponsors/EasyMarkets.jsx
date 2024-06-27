/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const EasyMarkets = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RealLogoTopSection text="Easy Markets" />
      <div className="container">
        <div className="content-bx">
          <div className="inside-cnt">
            <div className="inside-img-bx">
              <img src={assetsft.EasyMarkets} alt="Easy Markets" />
            </div>
            <div className="inside-txt-bx1">
              <a
                href="https://www.easymarkets.com/syc/en-gb/"
                target="_blank"
              >easyMarkets</a> 
              {' '}is a highly rated, award-winning financial service
              provider founded in 2001 which is headquartered in Cyprus with
              offices in Australia. The company holds multiple licenses and is
              regulated by CySEC for activities in the European region and ASIC
              for activities in the Southwest Pacific and Southeast Asian
              region.
            </div>
            <div className="inside-txt-bx5">
              easyMarkets provides its clients access to over 200+ CFD
              investment and trading instruments including shares, currencies,
              indices, industrial and precious metals, energy commodities,
              agricultural commodities and cryptocurrencies.
            </div>
            <div className="inside-txt-bx5">
              Since its founding easyMarkets has focused on offering its clients
              an unparalleled trading experience, through innovative trading
              tools, intuitive trading solutions and industry-leading customer
              support. One such innovative tool is dealCancellation, an
              options-based tool, which allows traders to recover their funds
              from a losing trade for a small fee. Free guaranteed stop-loss,
              negative balance protection and price transparency guarantee are
              standard protection features on all accounts easyMarkets offers.
            </div>

            <div className="inside-space" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyMarkets;
