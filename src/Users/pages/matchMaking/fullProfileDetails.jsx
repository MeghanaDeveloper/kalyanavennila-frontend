import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
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
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const FullProfileDetails = () => {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);

  const allUsersData = useSelector((state) => state?.authReducer?.allUserDetails);

  const userData = allUsersData?.find((u) => u._id === id);

  return (
    <>
      <section className="background-color padding-tb padding-lr ">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white mx-auto py-20 shadow-xl rounded-3xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl relative"
        >
          <p className="text-primary text-center font-bold text-4xl pb-12">
            Profile Details
          </p>

          <div className="flex justify-center items-center pb-14 gap-4 flex-wrap  px-6 md:px-14">
            <img
              src={userData?.profilePic || "/default-profile.png"}
              alt="Profile"
              onClick={() => setShowModal(true)}
              className="w-42 h-42 text-center rounded-xl border-3 border-primary shadow-lg cursor-pointer"
            />

              <p className="text-center text-3xl font-bold text-primary pb-4 px-6 md:px-14">
                {userData?.surName} {userData?.firstName} {userData?.lastName}
              </p>
          </div>

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

          <div className="flex justify-center items-center flex-col px-5 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-12  text-lg">
              <div className="flex items-center gap-5">
                <FaBirthdayCake className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Date of Birth:</p>
                  <p className="text-gray-600">
                    {userData?.dateOfBirth
                      ? new Date(userData.dateOfBirth).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "-----"}
                    {userData?.myAge ? ` (${userData.myAge} years)` : ""}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaTransgender className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Gender:</p>
                  <p className="text-gray-600">
                    {userData?.gender ? userData?.gender : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLanguage className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Mother Tongue:</p>
                  <p className="text-gray-600">
                    {userData?.motherTongue ? userData?.motherTongue : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPrayingHands className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Religion:</p>
                  <p className="text-gray-600">
                    {userData?.religion ? userData?.religion : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLandmark className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Caste:</p>
                  <p className="text-gray-600">
                    {userData?.caste ? userData?.caste : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaTag className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Sub-Caste:</p>
                  <p className="text-gray-600">
                    {userData?.subCaste ? userData?.subCaste : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaGraduationCap className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Education:</p>
                  <p className="text-gray-600">
                    {userData?.education ? userData?.education : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaBuilding className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Job Type:</p>
                  <p className="text-gray-600">
                    {" "}
                    {userData?.jobType === "Others"
                      ? userData?.otherJobType
                        ? userData?.otherJobType
                        : "-----"
                      : userData?.jobType
                      ? userData?.jobType
                      : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Known Languages:</p>
                  <p className="text-gray-600">
                    {Array.isArray(userData?.languages)
                      ? userData.languages.join(", ")
                      : userData?.languages || "-----"}
                  </p>
                </div>
              </div>

              {/* <div className="flex items-center gap-5">
              <FaBuilding className="text-primary" />
              <div>
                <p className="font-bold text-gray-700">Documents:</p>
                <Link
                  to={previewURL}
                  // target="_blank"
                  onClick={handleViewDocument}
                  className="text-blue-500 font-bold hover:underline hover:text-gray-500"
                >
                  View Document
                </Link>
              </div>
            </div> */}
            </div>

            <div className="border-b-2 py-5 border-gray-100"></div>

            <p className="text-primary font-bold text-2xl pl-16 pb-9">
              My Partner Preferences :
            </p>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 text-lg">
              <div className="flex items-center gap-5">
                <FaHeart className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Looking For:</p>
                  <p className="text-gray-600">
                    {userData?.lookingFor ? userData?.lookingFor : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaHeart className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Partner Age:</p>
                  <p className="text-gray-600">
                    {userData?.partnerAge ? userData?.partnerAge : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLanguage className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Mother Tongue:</p>
                  <p className="text-gray-600">
                    {userData?.partnerMotherTongue
                      ? userData?.partnerMotherTongue
                      : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLandmark className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Caste:</p>
                  <p className="text-gray-600">
                    {userData?.partnerCaste ? userData?.partnerCaste : "-----"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPrayingHands className="text-primary" />
                <div>
                  <p className="font-bold text-gray-700">Religion:</p>
                  <p className="text-gray-600">
                    {userData?.partnerReligion
                      ? userData?.partnerReligion
                      : "-----"}
                  </p>
                </div>
              </div>             
            </div>

            <div className="mt-24">
              <button
              //onClick={() => handleApproveProfile(userData?._id)}
              //disabled={userData?.isProfileStatus === "Approved"}
              // className={`button-styles px-4 ${
              //   userData?.isProfileStatus === "Approved"
              //     ? "bg-gray-400 cursor-not-allowed opacity-60"
              //     : "button-styles "
              // }`}
              className="button-styles"
            >
              Connect
            </button>
              </div>
          </div>
        </Motion.div>
      </section>
    </>
  );
};

export default FullProfileDetails;
