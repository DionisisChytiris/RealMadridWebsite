/* eslint-disable no-unused-vars */
import React from 'react'
import "./styles/main.css";
import RealLogoTopSection from "../../../Templates/RealLogoTopSection";
import { assetsft } from "../../../assets/FooterSponsors/assets";

const Palladium = () => {
  return (
    <>
    <RealLogoTopSection text="Palladium" />
    <div className="container">
      <div className="content-bx">
        <div className="inside-cnt">
          <div className="inside-img-bx">
            <img src={assetsft.Palladium} alt="Palladium" />
          </div>
          <div className="inside-txt-title1">About Palladium Hotel Group</div>
          <div className="inside-txt-bx2">
          Palladium Hotel Group is a Spanish hotel chain with over 50 years of experience, belonging to Grupo Empresas Matutes (GEM). The group has more than 40 hotels and over 13,000 rooms across seven countries: Spain, Mexico, Dominican Republic, Jamaica, Italy, Brazil and the United States, and operates 10 brands: TRS Hotels, Grand Palladium Hotels Resorts, Palladium Hotels, Palladium Boutique Hotels, Fiesta Hotels Resorts, Ushuaïa Unexpected Hotels, Only YOU Hotels, BLESS Collection Hotels, the Hard Rock Hotels brand under license with three hotels in Ibiza, Tenerife and Marbella and the ephemeral brand 45 Times Square Hotel. Palladium Hotel Group is known for its philosophy of taking care of its staff and offering its customers a high level of quality in its products and services. <a href="https://www.palladiumhotelgroup.com/en" target="_blank">
          www.palladiumhotelgroup.es
              </a>
            </div>
          <div className="inside-space" />
        </div>
      </div>
    </div>
  </>
  )
}

export default Palladium