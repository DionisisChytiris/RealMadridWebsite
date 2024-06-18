/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Cantabria = () => {
  return (
    <>
    <RealLogoTopSection text="Cantabria" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Cantabria} alt="Cantabria" />
          </div>
          <div className="inside-txt-bx1">
          Cantabria Labs, with its innovative products and entrepreneurial spirit, has become a leading brand in dermatological prescriptions in Europe (leader in Spain, Italy and Portugal), seeking to improve people's health and quality of life. With a presence in more than 80 countries and subsidiaries in Spain, Italy, France, Mexico, Portugal, China, USA and Morocco, Cantabria Labs has earned its reputation and international recognition.
          </div>
          <div className="inside-txt-bx5">
          The Cantabria Labs production centres meet the highest quality standards in manufacturing and distributing more than 30 million units of product per year.
          </div>
          <div className="inside-txt-bx5">
          Cantabria Labs is currently recognised in the Healthcare sector thanks to both its innovations and scientific endorsement as well as the closeness and entrepreneurial skills of its more than 900 employees.
          </div>
          <div className="inside-txt-bx5">
          Cantabria Labs and Real Madrid have teamed up to use their non-conformist DNA and philosophy of teamwork to promote a message that raises awareness of the importance of skin care in order to live a healthy, quality life: "Celebrate life" until the end.
          </div>
          <div className="inside-txt-bx5">
          Cantabria Labs y el Real Madrid se unen para, a través de su ADN inconformista y filosofía de trabajo en equipo, difundir juntos un mensaje de concienciación sobre la importancia del cuidado de la piel para poder vivir con salud y calidad de vida: Hasta el final, “Celebrate life”.
          </div>

          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Cantabria