/* eslint-disable no-unused-vars */
import React from 'react'
import './AppDownload.css'
import {assets} from '../../../assets/footerImages/assets'

const AppDownload = () => {
  return (
    <div className='appDownload'>
        <div className='text1'>Download Now</div>
        <div className='text2'>Official App Fan</div>
        <div className="logos">
            <img src={assets.googlePlay} alt="" />
            <img className='apple'src={assets.AppStoreBadge} alt="" />
            <img src={assets.Huawei} alt="" />
        </div>
    </div>
  )
}

export default AppDownload