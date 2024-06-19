/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "./ImageSlide.css";
import img1 from "../../assets/HomePageImages/trofeos.webp";
import img2 from "../../assets/BernabeuMuseum.jpg";
import img3 from "../../assets/img1.png";

const IMAGES = [{ url: img1 }, { url: img2 }, { url: img3 }];

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex(index => {
      if (index === IMAGES.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return IMAGES.length - 1
      return index - 1
    })
  }


  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div className="img-slider">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {IMAGES.map(({ url, alt }, index) => (
            <img
              key={url}
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <RiArrowLeftSLine aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <RiArrowRightSLine aria-hidden />
      </button>
      </div>
    </section>
  );
};

export default ImageSlider;
