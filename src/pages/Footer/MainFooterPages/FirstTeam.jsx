/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import RealLogoTopSection from '../../../Templates/RealLogoTopSection'
import { assets } from '../../../assets/assets'
import './styles/FirstTeam.css'
import '../../../Templates/RealLogoTopSection.css'
import News from '../../../components/FirstTeamFCMen/News'
import Squad from '../../../components/FirstTeamFCMen/Squad'

const FirstTeam = () => {
  const [option, setOption] = useState('news1')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const newsCl={
    color: option == 'news1'? 'blue': 'var(--darkblue1)',
    borderBottom: option =='news1' ? '3px solid blue': ''
  } 
  const squadCl={
    color: option =='squad1'? 'blue': 'var(--darkblue1)',
    borderBottom: option =='squad1' ? '3px solid blue': ''
} 
  return (
    <>
    <RealLogoTopSection text='First Team'/>


    <div style={title}>
      <div className='first-team-fc-btn-title'>
        <div className='news' style={newsCl} onClick={()=>setOption('news1')}>News</div>
        <div className='squad' style={squadCl} onClick={()=>setOption('squad1')}>Squad</div>
      </div>
      <div style={logo} className="st-me-logo"></div>
    </div>

      {option=='news1'? 
      <News/> : <Squad/>
      }
    
    </>
  )
}

export default FirstTeam

const title={
  width: '100%',
  height: 60,
  marginTop: -5,
  backgroundColor: 'var(--lightgray2)',
  zIndex: -1,
  borderBottom: '3px solid lightgray',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden'
}

const logo = {
  backgroundImage: `url(${assets.real_logo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  width: "160px",
  height: "160px",
  marginTop: -127 ,
  overflow: 'hidden'
};

