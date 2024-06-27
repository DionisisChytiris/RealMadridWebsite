/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";


const Zegna = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <RealLogoTopSection text="Zegna" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Zegna} alt="Zegna" />
          </div>
          <div className="inside-txt-bx1">
          Zegna and Real Madrid C.F. have formed a unique partnership: the leading Italian luxury men's fashion house will be dressing the world's most successful football club. In doing so, Zegna will become the club's Official Luxury Travelwear partner.
          </div>
          <div className="inside-txt-bx5">
          Inspired by our visionary founder, Zegna follows its own path down the road that Ermenegildo built over 110 years ago in the mountains in Piedmont, Northern Italy. His 232 road, crossing the 100 km2 Oasi Zegna natural territory surrounding the wool mill, has been turned into a graphic abstraction and signifier of the Zegna brand identity where history is expressed in the family name of the founder. Established as a fabric maker, Zegna is internationally recognized as a leading global luxury menswear brand and part of the Ermenegildo Zegna Group. Managed by Gildo Zegna as CEO, Zegna Group designs, creates and distributes luxury clothing and accessories remaining committed to leveraging its rich heritage to build a better present and future.
          </div>

          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Zegna