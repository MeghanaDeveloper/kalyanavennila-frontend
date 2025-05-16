import React from "react";
import Sponsors from "./components/sponsors";
import MatchMaking from "./components/matchMaking";
import BannerSlider from "./components/bannerSection";
import ProfileSection from "./components/profileSection";
import Community from "./components/community";
import ChooseUs from "./components/chooseUs";
import ProfileModals from "../profileModals/profileModals";
import Subscription from "./components/subscription";


const Home = () => {

  return (
    <>
      <BannerSlider />

            <ProfileSection />
            
      <MatchMaking />
            <Subscription/>
      <Community />
      <ChooseUs />
      <Sponsors />

      <ProfileModals/>
    </>
  );
};

export default Home;
