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
          <a href='https://play.google.com/store/apps/details?id=com.mcentric.mcclient.MyMadrid&hl=en&gl=US' target='_blank'>
            <img src={assets.googlePlay} alt="" />
          </a>
          <a href='https://apps.apple.com/us/app/real-madrid/id1107624540' target='_blank'>
            <img className='apple'src={assets.AppStoreBadge} alt="" />
          </a>
          <a href='https://appgallery.huawei.com/#/app/C102163903' target='_blank'>
            <img src={assets.Huawei} alt="" />
          </a>
        </div>
    </div>
  )
}

export default AppDownload