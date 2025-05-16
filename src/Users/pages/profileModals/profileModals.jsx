import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import useProfileContextData from "../../hooks/useProfileContextData";
import { getUserFullDetails } from "../../services/profileAPI's";
import toast from "react-hot-toast";

const ProfileModals = () => {
  const { profileModalOpen, setProfileModalOpen } = useProfileContextData();

  const profileProgress = useSelector(
    (state) => state.authReducer.profileProgress
  );
  const userProfile = useSelector((state) => state?.authReducer?.userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        await dispatch(getUserFullDetails(navigate));
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchUserDetails();
  }, [dispatch, navigate]);

  return (
    <>
      {profileProgress !== 100 &&
        profileModalOpen &&
        userProfile?.isProfileStatus === "Pending" && (
          <>
            <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 shadow-2xl  ">
              <div className="bg-white bg-opacity-60 rounded-lg p-8  min-h-[50vh] max-h-[90vh] min-w-[30vw] max-w-[80vw] md:max-w-[42vw] overflow-y-scroll scrollbar-hide relative border-4 border-primary ">
                <IoMdClose
                  onClick={() => setProfileModalOpen(false)}
                  className="absolute right-8  text-primary text-xl transition-effects"
                ></IoMdClose>

                <h2 className=" text-4xl md:text-5xl font-italian pt-9 font-bold text-primary text-center ">
                  Welcome to Kalyana Vennila !
                </h2>
                <h3 className="text-xl py-6 font-semibold text-gray-700 text-center">
                  You're almost there!
                </h3>

                <p className="pt-2 pb-6 text-md text-gray-600 text-center">
                  Let's complete your profile so we can start showing you the
                  most compatible matches.
                </p>

                <div className="text-center my-6">
                  <button
                    className="bg-primary text-white px-6 py-2 rounded-2xl  hover:bg-amber-500 font-bold transition-effects cursor-pointer"
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

      {profileModalOpen && userProfile?.isProfileStatus === "Rejected" && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 shadow-2xl  ">
          <div className="bg-white bg-opacity-60 rounded-2xl p-8  min-h-[50vh] max-h-[90vh] min-w-[30vw] max-w-[80vw] md:max-w-[40vw] overflow-y-scroll scrollbar-hide relative border-4 border-primary ">
            <IoMdClose
              onClick={() => {
                setProfileModalOpen(false);
              }}
              className="absolute right-8 text-primary text-xl transition-effects cursor-pointer"
            />
            <h2 className="text-4xl md:text-5xl font-italian pt-9 font-bold text-center text-primary">
              Profile Rejected
            </h2>
            <h3 className="text-xl py-6 font-semibold text-gray-700 text-center">
              Please review and update your profile.
            </h3>
            <p className="pt-2 pb-6 text-md text-gray-600 text-center">
              Our team has reviewed your profile and it didn’t meet our
              criteria. You can edit and resubmit it for approval.
            </p>
            <div className="text-center my-6">
              <button
                className="bg-primary font-bold text-white px-6 py-2 rounded-2xl hover:bg-red-700 transition-effects"
                onClick={() => {
                  setProfileModalOpen(false), navigate("/create-profile");
                }}
              >
                Edit My Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileModals;
