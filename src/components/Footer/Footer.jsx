/* eslint-disable no-unused-vars */
import React from "react";
import Sponsors from "./Sponsors/Sponsors";
import FooterPages from "./FooterPages/FooterPages";
import AppDownload from "./AppDownload/AppDownload";
import Copyright from "./CopyrightSection/Copyright";
import { DivideLine } from "../../pages/Home/HomePage";

const Footer = () => {
  return (
    <>
      <DivideLine/>
      <FooterPages />
      <AppDownload />
      <Sponsors />
      <Copyright/>
    </>
  );
};

export default Footer;
