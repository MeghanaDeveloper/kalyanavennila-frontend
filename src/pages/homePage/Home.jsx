import React from 'react'
import Sponsors from './components/sponsors'
import MatchMaking from './components/matchMaking'
import BannerSlider from './components/bannerSection'



const Home = () => {
  return (
    <>
    <BannerSlider/>  
    <MatchMaking/>
    <Sponsors/> 
    </>
  )
}

export default Home