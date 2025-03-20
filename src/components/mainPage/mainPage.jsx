import React from 'react'
import BannerSlider from '../../pages/homePage/components/bannerSection'
import MatchMaking from '../../pages/homePage/components/matchMaking'
import Community from '../../pages/homePage/components/community'
import ChooseUs from '../../pages/homePage/components/chooseUs'
import Sponsors from '../../pages/homePage/components/sponsors'

const MainPage = () => {
  return (
    <>
     <BannerSlider/>  
    <MatchMaking/>
    <Community/>
    <ChooseUs/>
    <Sponsors/> 
    </>
  )
}

export default MainPage