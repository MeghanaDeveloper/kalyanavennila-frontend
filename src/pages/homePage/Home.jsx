import React from 'react'
import Sponsors from './components/sponsors'
import MatchMaking from './components/matchMaking'
import BannerSlider from './components/bannerSection'
import Navbar from '../../components/layouts/Navbar'
import Footer from '../../components/layouts/Footer'
import HomePage from './components/chooseUs'
import Community from './components/community'
import ChooseUs from './components/chooseUs'


const Home = () => {
  return (
    <>
    <Navbar/>
    <BannerSlider/>  
    <MatchMaking/>
    <Community/>
    <ChooseUs/>
    <Sponsors/> 
    <Footer/>
    </>
  )
}

export default Home