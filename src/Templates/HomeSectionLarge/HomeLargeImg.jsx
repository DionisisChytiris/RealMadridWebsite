/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './HomeLargeImg.css'

const HomeLrgImg = ({img, title}) => {
  return (
    <div className='container'>
        <div className="part1">
          <img src={img} alt="" />
        </div>
        <div className="part2">
          <div className="title">{title}</div>
        </div>
    </div>
  )
}

export default HomeLrgImg
