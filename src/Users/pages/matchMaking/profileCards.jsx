import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserFullDetails } from "../../services/profileAPI's";
import { IoMdClose } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SearchProfile from "./searchProfile";

const ProfileCards = () => {
  const allUserProfile = useSelector(
    (state) => state?.authReducer?.allUserDetails
  );

  const approvedProfiles = allUserProfile?.filter(
    (profile) => profile?.isProfileStatus === "Approved"
  );

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        await getAllUserFullDetails(dispatch);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [dispatch]);

  const handleViewProfile = (profileId) => {
    //setShowModal(true);
    navigate(`/find-your-match/${profileId}`);
  };

  //const filteredProfiles = approvedProfiles?.filter(applyFilters);
  return (
    <>
      <div className="fixed  top-18 left-0 w-full bg-yellow-100 text-yellow-900 text-center px-4 py-4 shadow-md z-5 mb-6">
        <span className="text-lg font-semibold">
          🔓 Unlock Unlimited Profiles — Just One Subscription for 3 Months to
          view profiles!
        </span>
      </div>

      <SearchProfile
        approvedProfiles={approvedProfiles}
        handleViewProfile={handleViewProfile}
      />

      {loading && (
        <div className="absolute inset-0 bg-white/80 flex justify-center items-center z-10">
          <FaSpinner className="text-primary animate-spin text-4xl" />
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-md flex justify-center items-center z-50 shadow-3xl  ">
          <div className="bg-white bg-opacity-60 rounded-lg p-6 sm:p-10 min-h-[50vh] max-h-[90vh] w-[90vw] sm:w-[80vw] md:w-[40vw] overflow-y-auto scrollbar-hide relative text-center border-primary border-4">
            <IoMdClose
              onClick={() => [setShowModal(false)]}
              className="absolute right-8  text-primary text-xl transition-effects"
            ></IoMdClose>
            <p className="text-5xl font-italian font-bold text-primary my-6">
              Subscribe to View Profiles
            </p>
            <p className="mb-6">
              To view profile contacts , please subscribe. You’ll get unlimited
              access to view profiles for 3 months.
            </p>
            <p className="mb-9">
              Subscribe now to unlock all profiles and find your perfect match!
            </p>
            <div className="mb-9">
              <a
                href="upi://pay?pa=Ashok.nagraj13@okicici&pn=Ashok&am=100&cu=INR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-center px-6 py-3 w-full sm:w-auto text-base font-bold rounded-ful hover:bg-amber-500 transition-all"
              >
                Click here to Subscribe
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCards;
