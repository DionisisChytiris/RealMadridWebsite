/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Unicaja = () => {
  return (
    <>
    <RealLogoTopSection text="UnicajaBanco" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Unicaja} alt="Unicaja" />
          </div>
          <div className="inside-txt-bx1">
          Real Madrid's official financial institution, Unicaja, is an institution that has a proven track record of solvency and financial stability. Following the completion of the merger with Liberbank, Unicaja is now the fifth largest bank in the Spanish financial system in terms of customers, with more than 4.5 million customers.
          </div>
          <div className="inside-txt-bx5">
          It is a listed bank with an extensive and diversified presence in 80% of the Spanish territory, and is the leading financial institution in six autonomous communities, its regions of origin (Andalusia, Asturias, Cantabria, Castilla-La Mancha, Castilla y León and Extremadura), in addition to a presence in other markets such as Madrid, Ceuta and Melilla, areas where it has a long-standing presence.
          </div>
          <div className="inside-txt-bx5">
          It is a listed bank with an extensive and diversified presence in 80% of the Spanish territory, and is the leading financial institution in six autonomous communities, its regions of origin (Andalusia, Asturias, Cantabria, Castilla-La Mancha, Castilla y León and Extremadura), in addition to a presence in other markets such as Madrid, Ceuta and Melilla, areas where it has a long-standing presence.
          </div>
          <div className="inside-txt-bx5">
          Characterised by its model of local banking and a sustainable business oriented towards retail business, with prudent management of its commercial strategy and its socially responsible risk profile, placing quality, innovation and digital transformation at the forefront, and integrating technology to improve customer service and the bank's efficiency.
          </div>

          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Unicaja