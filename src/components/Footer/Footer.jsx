/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/footerImages/assets";
import Sponsors from "./Sponsors/Sponsors";
import FooterPages from "./FooterPages/FooterPages";
import AppDownload from "./AppDownload/AppDownload";

const Footer = () => {
  return (
    <div className="containerft">
      <FooterPages />

      <AppDownload />

      <Sponsors />

      <div>hey</div>
      <div>hey</div>
      <div>hey</div>
      <div>hey</div>
    </div>
  );
};

export default Footer;
