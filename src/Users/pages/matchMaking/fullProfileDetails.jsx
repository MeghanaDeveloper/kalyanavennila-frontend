import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FaPhone,
  FaBuilding,
  FaTransgender,
  FaLanguage,
  FaGraduationCap,
  FaPrayingHands,
  FaLandmark,
  FaTag,
  FaBirthdayCake,
  FaHeart,
  FaUserCircle,
  FaEnvelope,
  FaGlobe,
  FaGlobeAmericas,
  FaCity,
} from "react-icons/fa";
import { GiCapitol } from "react-icons/gi";
import { motion as Motion } from "framer-motion";
import ViewProfileDetails from "../profile/viewProfileDetails";

const FullProfileDetails = () => {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);

  const allUsersData = useSelector(
    (state) => state?.authReducer?.allUserDetails
  );

  const userData = allUsersData?.find((u) => u._id === id);

  return (
    <>
      <section className="background-color padding-tb ">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 py-20 mx-auto shadow-xl rounded-3xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl relative"
        >
          <p className="text-primary text-center font-bold text-4xl pb-12">
            Profile Details
          </p>

          <ViewProfileDetails userData={userData} showCards={false} />
        </Motion.div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative">
              <img
                src={userData?.profilePic || "/default-profile.png"}
                alt="Full Preview"
                className="w-full h-full rounded-xl"
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-0 right-0  rounded-full p-2 text-primary font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default FullProfileDetails;
