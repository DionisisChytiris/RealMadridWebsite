/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";

const SponsorItem = ({ link, href, img, alt }) => {
  return (
    <>
      {link ==='link' ? (
        // <Link to={link}>
        //   <img src={img} alt={alt} />
        // </Link>
        <a href={href} target="_blank">
          <img src={img} alt={alt} />
        </a>
      ) : (
        <a href={href}>
          <img src={img} alt={alt} />
        </a>
      )}
    </>
  );
};

export default SponsorItem
