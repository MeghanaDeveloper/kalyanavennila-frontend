import React from 'react'
import Sponsors from './components/sponsors'
import MatchMaking from './components/matchMaking'
import BannerSlider from './components/bannerSection'
import Navbar from '../../components/layouts/Navbar'
import Footer from '../../components/layouts/Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <BannerSlider/>  
    <MatchMaking/>
    <Sponsors/>
    <Footer/>
    </>
  )
}

export default Home