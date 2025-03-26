import React from 'react'
import BannerSlider from '../../pages/homePage/components/bannerSection'
import MatchMaking from '../../pages/homePage/components/matchMaking'
import Sponsors from '../../pages/homePage/components/sponsors'

const MainPage = () => {
  return (
    <>
     <BannerSlider/>  
    <MatchMaking/>
    <Sponsors/> 
    </>
  )
}

export default MainPage