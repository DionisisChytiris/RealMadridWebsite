/* eslint-disable no-unused-vars */
import React from "react";
import Sponsors from "./Sponsors/Sponsors";
import FooterPages from "./FooterPages/FooterPages";
import AppDownload from "./AppDownload/AppDownload";
import Copyright from "./CopyrightSection/Copyright";

const Footer = () => {
  return (
    <>
      <FooterPages />
      <AppDownload />
      <Sponsors />
      <Copyright/>
    </>
  );
};

export default Footer;
