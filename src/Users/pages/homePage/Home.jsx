import React from "react";
import Sponsors from "./components/sponsors";
import MatchMaking from "./components/matchMaking";
import BannerSlider from "./components/bannerSection";
import ProfileSection from "./components/profileSection";
import Community from "./components/community";
import ChooseUs from "./components/chooseUs";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import useProfileContextData from "../../hooks/useProfileContextData";
import { useSelector } from "react-redux";

const Home = () => {
  const { profileModalOpen, setProfileModalOpen } = useProfileContextData();

  const navigate = useNavigate();

  const profileProgress  = useSelector((state) => state.authReducer.profileProgress);

  const shouldShowModal = profileProgress !== 100
  return (
    <>
      <BannerSlider />
      <ProfileSection />
      <MatchMaking />
      <Community />
      <ChooseUs />
      <Sponsors />

      {shouldShowModal && profileModalOpen && (
        <>
          <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 shadow-2xl  ">
            <div className="bg-white bg-opacity-60 rounded-lg p-10  min-h-[50vh] max-h-[90vh] min-w-[30vw] max-w-[80vw] md:max-w-[35vw] overflow-y-scroll scrollbar-hide relative ">
              <IoMdClose
                onClick={() => [setProfileModalOpen(false)]}
                className="absolute right-8  text-primary text-xl transition-effects"
              ></IoMdClose>

              <h2 className="text-2xl pt-8 font-bold text-primary text-center ">
                Welcome to Kalyana Vennila !
              </h2>
              <h3 className="text-xl py-4 font-semibold text-gray-700 text-center">
                You're almost there!
              </h3>

              <p className="pt-2 pb-6 text-md text-gray-600 text-center">
                Let's complete your profile so we can start showing you the most
                compatible matches.
              </p>

              <div className="text-center my-6">
                <button
                  className="bg-primary text-white px-4 py-2 rounded-2xl  hover:bg-amber-500 transition-effects cursor-pointer"
                  onClick={() => [
                    setProfileModalOpen(false),
                    navigate("/create-profile"),
                  ]}
                  variant="contained"
                  color="primary"
                >
                  Create My Profile
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
