/* eslint-disable no-unused-vars */
import React from 'react'
import './TrophyRecord.css'
import { assets } from '../../assets/trackRecordsIcons/assets'

const BasketballRecords = () => {
  return (
    <div>
    <div className="bd-rc-cnt">
   <div className="bd-rc-left">
     {/* European Cups*/}
     <div className="bd-rc-left-item">
       <div className="bd-rc-lf-tl">
         <img src={assets.BsEuCups} alt="" />
         <div className="bd-rc-lf-num">11</div>
       </div>
       <div className="bd-rc-title">
        European Cups
       </div>
       <div className="bd-rc-progress"></div>
     </div>
     {/* Intercontinental Cups */}
     <div className="bd-rc-left-item">
       <div className="bd-rc-lf-tl">
         <img src={assets.BsIntercontinental} alt="" />
         <div className="bd-rc-lf-num">14</div>
       </div>
       <div className="bd-rc-title">Intercontinental Cups</div>
       <div className="bd-rc-progress"></div>
     </div>
     {/* European Cup Winners Cups */}
     <div className="bd-rc-left-item">
       <div className="bd-rc-lf-tl">
         <img src={assets.BsEuWinnerCup} alt="" />
         <div className="bd-rc-lf-num">8</div>
       </div>
       <div className="bd-rc-title">European Cup Winners&apos; Cups</div>
       <div className="bd-rc-progress"></div>
     </div>
     {/* Korac Cup */}
     <div className="bd-rc-left-item">
       <div className="bd-rc-lf-tl">
         <img src={assets.BsKoracCup} alt="" />
         <div className="bd-rc-lf-num">5</div>
       </div>
       <div className="bd-rc-title">Korac Cup</div>
       <div className="bd-rc-progress"></div>
     </div>
     {/* ULEB Cup*/}
     <div className="bd-rc-left-item">
       <div className="bd-rc-lf-tl">
         <img src={assets.BsULEB} alt="" />
         <div className="bd-rc-lf-num">1</div>
       </div>
       <div className="bd-rc-title">ULEB Cup</div>
       <div className="bd-rc-progress"></div>
     </div>
   </div>
   <div className="bd-rc-right">
     {/* National Leagues */}
     <div className="bd-rc-left-item">
       <div className="bd-rc-lf-tl">
         <img src={assets.BsNationalLeague} alt="" />
         <div className="bd-rc-lf-num">36</div>
       </div>
       <div className="bd-rc-title">National Leagues</div>
       <div className="bd-rc-progress"></div>
     </div>
     {/* Spanish Cups */}
     <div className="bd-rc-left-item">
       <div className="bd-rc-lf-tl">
         <img src={assets.BsSpanishCup} alt="" />
         <div className="bd-rc-lf-num">29</div>
       </div>
       <div className="bd-rc-title">Spanish Cups</div>
       <div className="bd-rc-progress"></div>
     </div>
     {/* Spanish Super Cups */}
     <div className="bd-rc-left-item">
       <div className="bd-rc-lf-tl">
         <img src={assets.BsSpanishSuperCup} alt="" />
         <div className="bd-rc-lf-num">13</div>
       </div>
       <div className="bd-rc-title">Spanish Super Cups</div>
       <div className="bd-rc-progress"></div>
     </div>
   </div>
 </div>
 <div 
   style={{
     width: 200,
     height: 10,
     backgroundColor: "blue",
     marginTop: 0,
   }}
 ></div>
</div>
  )
}

export default BasketballRecords