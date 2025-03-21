import React from "react";
import { 
  FaEdit, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding, 
  FaBriefcase, FaTransgender, FaLanguage, FaGraduationCap, 
  FaPrayingHands, FaLandmark, FaTag, FaBirthdayCake, FaHeart 
} from "react-icons/fa";

const ProfilePage = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-br from-[#E0BBE4] via-[#957DAD] to-[#D291BC]">
        <div className="bg-white my-14 md:mx-18 sm:mx-10 mx-1 shadow-xl rounded-3xl p-10 w-full max-w-xl md:max-w-3xl lg:max-w-4xl relative">

          <p className="text-orange-600 text-center font-bold text-4xl pb-6">My Profile</p>

          <button className="absolute top-24 right-10 text-primary transition-effects">
            <FaEdit size={24} />
          </button>

          <div className="flex flex-col items-center gap-4">
            <img
              src="https://via.placeholder.com/140"
              alt="Profile"
              className="w-32 h-32 rounded-full border-3 border-primary shadow-lg"
            />
            <h2 className="text-center text-3xl font-bold text-gray-800">Meghana Sreee</h2>
          </div>

          <div className="mt-10 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-56 md:gap-x-18 gap-x-0 gap-y-6 text-lg">
              
              <div className="flex items-center gap-5">
                <FaTransgender className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Gender:</p>
                  <p className="text-gray-600">Male</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaBirthdayCake className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Date of Birth:</p>
                  <p className="text-gray-600">June 15, 1993</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Email:</p>
                  <p className="text-gray-600">meghana@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Mobile Number:</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Location:</p>
                  <p className="text-gray-600">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLanguage className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Mother Tongue:</p>
                  <p className="text-gray-600">Telugu</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPrayingHands className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Religion:</p>
                  <p className="text-gray-600">Hindu</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLandmark className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Caste:</p>
                  <p className="text-gray-600">BC</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaTag className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">SubCaste:</p>
                  <p className="text-gray-600">Telaga</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaGraduationCap className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Education:</p>
                  <p className="text-gray-600">Graduation</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaBuilding className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Job Type:</p>
                  <p className="text-gray-600">Government</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaHeart className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Looking For:</p>
                  <p className="text-gray-600">Woman</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaHeart className="text-primary" />
                <div>
                  <p className="font-semibold text-gray-700">Partner Age:</p>
                  <p className="text-gray-600">25-30</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProfilePage;
