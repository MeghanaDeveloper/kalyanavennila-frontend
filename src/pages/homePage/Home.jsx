import React from 'react'
import Sponsors from './components/sponsors'
import MatchMaking from './components/matchMaking'
import BannerSlider from './components/bannerSection'
import ProfileSection from './components/profileSection'
import Community from './components/community'
import ChooseUs from './components/chooseUs'



const Home = () => {
  return (
    <>
    <BannerSlider/>  
    <ProfileSection/>
    <MatchMaking/>
    <Community/>
    <ChooseUs/>
    <Sponsors/> 
    </>
  )
}

export default Home