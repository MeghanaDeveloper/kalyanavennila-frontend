import React from "react";
import {
  FaEdit, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBuilding,
  FaBriefcase, FaTransgender, FaLanguage, FaGraduationCap,
  FaPrayingHands, FaLandmark, FaTag, FaBirthdayCake, FaHeart
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

  const { userData } = useSelector((state) => state.authReducer)

  const navigate = useNavigate()
  return (
    <>
      <div className="bg-gradient-to-br from-[#E0BBE4] via-[#957DAD] to-[#D291BC] py-12">
        <div className="bg-white mx-auto py-16 shadow-xl rounded-3xl  w-[90%] md:max-w-2xl lg:max-w-3xl relative">

          <p className="text-primary text-center font-bold text-4xl pb-9">My Profile</p>

          <button onClick={() => navigate('/create-profile')} className="absolute top-28 md:right-10 right-4 text-primary transition-effects">
            <FaEdit size={24} />
          </button>

          <div className="flex justify-center items-center">
            <img
              src={userData?.profilePic}
              alt="Profile"
              className="w-32 h-32 text-center rounded-full border-3 border-primary shadow-lg"
            />
          </div>

          <p className="text-center text-3xl font-bold text-gray-800 pt-6 pb-3">{userData?.surName} {userData?.firstName} {userData?.lastName}</p>

          <p className="text-center text-lg text-gray-600 pb-12">{userData?.email}</p>

          <div className="flex justify-center items-center flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-28 text-lg">
              <div className="flex items-center gap-5">
                <FaBirthdayCake className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Date of Birth:</p>
                  <p className="text-gray-600">
                    {userData?.dateOfBirth
                      ? new Date(userData.dateOfBirth).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      : "N/A"}
                    {userData?.myAge ? ` (${userData.myAge} years)` : ""}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Mobile Number:</p>
                  <p className="text-gray-600">{userData?.mobile}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaTransgender className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Gender:</p>
                  <p className="text-gray-600">{userData?.gender}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLanguage className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Mother Tongue:</p>
                  <p className="text-gray-600">{userData?.motherTongue}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPrayingHands className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Religion:</p>
                  <p className="text-gray-600">{userData?.religion}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLandmark className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Caste:</p>
                  <p className="text-gray-600">{userData?.caste}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaTag className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Sub-Caste:</p>
                  <p className="text-gray-600">{userData?.subCaste}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaGraduationCap className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Education:</p>
                  <p className="text-gray-600">{userData?.education}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaBuilding className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Job Type:</p>
                  <p className="text-gray-600">{userData?.jobType}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Known Languages:</p>
                  <p className="text-gray-600">
                    {Array.isArray(userData?.languages)
                      ? userData.languages.join(", ")
                      : userData?.languages || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b-2 py-5 border-gray-100"></div>

            <p className="text-primary font-bold text-2xl pl-16 py-7">My Partner Preferences :</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44  gap-y-6 text-lg">
              <div className="flex items-center gap-5">
                <FaHeart className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Looking For:</p>
                  <p className="text-gray-600">{userData?.lookingFor}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaHeart className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Partner Age:</p>
                  <p className="text-gray-600">{userData?.partnerAge}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLanguage className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Mother Tongue:</p>
                  <p className="text-gray-600">{userData?.partnerMotherTongue}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLandmark className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Caste:</p>
                  <p className="text-gray-600">{userData?.partnerCaste}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPrayingHands className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Religion:</p>
                  <p className="text-gray-600">{userData?.partnerReligion}</p>
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
