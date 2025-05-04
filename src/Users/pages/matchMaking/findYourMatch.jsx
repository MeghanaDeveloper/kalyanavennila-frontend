import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserFullDetails } from "../../services/authAPI's";
import { motion as Motion } from "framer-motion";
import ProfileCards from "./profileCards";

const FindYourMatch = () => {
  const userProfile = useSelector((state) => state?.authReducer?.userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserDetails = async () => {
      await dispatch(getUserFullDetails(navigate));
    };

    fetchUserDetails();
  }, [dispatch, navigate]);

  return (
    <>
      <section className="background-color padding-lr padding-tb">
          {userProfile?.isProfileStatus !== "Approved" ? (
            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white mx-auto py-10 shadow-xl rounded-3xl  w-[90%] md:max-w-2xl lg:max-w-3xl relative text-center px-16"
            >
              <div className="text-6xl my-6 animate-pulse ">⏳</div>
              <p className="text-5xl  font-italian font-bold text-primary mb-6">
                Profile Under Review
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Your profile is currently being reviewed by our team.
              </p>
              <p className=" text-lg text-gray-700 mb-4">
                To browse and connect with matching profiles, your profile must
                be{" "}
                <span className="font-bold text-primary">
                  completed and approved
                </span>
                .
              </p>
              <p className="text-lg text-gray-600">
                Complete all details carefully to speed up approval. Thanks for
                your patience! 🌟
              </p>

              <div className="text-center my-6">
                <button
                  className="bg-primary text-white px-4 py-2 rounded-2xl font-bold  hover:bg-amber-500 transition-effects cursor-pointer"
                  onClick={() => [
                    // setProfileModalOpen(false),
                    navigate("/create-profile"),
                  ]}
                  variant="contained"
                  color="primary"
                >
                  Create My Profile
                </button>
              </div>
            </Motion.div>
          ) : (
            <ProfileCards/>
          )}
      </section>
    </>
  );
};

export default FindYourMatch;
