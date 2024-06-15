/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./HomeLargeImg.css";
import { Link } from "react-router-dom";

const HomeLrgImg = ({ link1, img, alt, title }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Link to={link1}>
      <div className="container">
        <div
          className="part1"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={img} alt={alt} />
          {/* {isHovering && (
            <div style={hoverText}>
              {title}
            </div>
          )} */}
        </div>
        <div className="part2">
          <div className="title">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default HomeLrgImg;

const hoverText = {
  color: "lightgray",
  fontSize: "12px",
  position: "absolute",
  bottom: '50%',
  left:' 40%',
  // right: '40%',
  transition: "all 3.3s ease",
  backgroundColor: '#322e2e',
  padding: '5px 8px',
  border: 'solid 1px white'
};
