import { City, Country, State } from "country-state-city";
import React from "react";
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

// Format date
const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const Card = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-5">
    {Icon && <Icon className="text-primary text-xl" />}
    <div>
      <p className="font-bold text-gray-700">{label}:</p>
      <p className="text-gray-600">{value || "-----"}</p>
    </div>
  </div>
);

const ViewProfileDetails = ({ userData, showCards = true }) => {
  if (!userData) return null;
console.log(userData)
  return (
    <>
      <div className="bg-gray-50 shadow-md rounded-2xl p-10 mb-8 mx-6">
        <div className="flex justify-center items-center md:gap-13 gap-3 flex-wrap">
          <img
            src={userData?.profilePic || "/default-profile.png"}
            alt="Profile"
            className="w-44 h-44 text-center rounded-2xl border-4 border-primary shadow-lg"
          />
          <p className="text-center text-3xl font-bold text-gray-800 pt-6 pb-2">
            {userData?.surName} {userData?.firstName} {userData?.lastName}
            <br />
            {showCards && (
              <>
                <span className="text-xl">[{userData?.accountId}]</span>
                <span className="block text-gray-400 text-base">
                  (Profile Created By {userData?.accountCreatedBy})
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      <div  className="bg-gray-50 shadow-md rounded-2xl p-10 mb-8 mx-6">
        <p className="text-2xl font-bold text-primary mb-4">
          Personal Information
        </p>
        <Card icon={FaEnvelope} label="Email" value={userData?.email} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg pt-4">
          <Card
            icon={FaUserCircle}
            label="Full Name"
            value={`${userData?.surName} ${userData?.firstName} ${userData?.lastName}`}
          />
          <Card
  icon={FaBirthdayCake}
  label="Date of Birth"
  value={
    `${userData?.dateOfBirth ? formatDate(userData.dateOfBirth) : "N/A"} (${userData?.myAge} Years)`
  }
/>

          <Card
            icon={FaTransgender}
            label="Gender"
            value={userData?.gender}
          />
          <Card
            icon={FaLanguage}
            label="Mother Tongue"
            value={userData?.motherTongue}
          />
          <Card
            icon={FaGlobe}
            label="Known Languages"
            value={
              Array.isArray(userData?.languages)
                ? userData.languages.join(", ")
                : userData?.languages || "N/A"
            }
          />
        </div>
      </div>

      <div className="bg-gray-50 shadow-md rounded-2xl p-10 mb-8 mx-6">
        <p className="text-2xl font-bold text-primary mb-4">
          Community Information
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <Card
            icon={FaPrayingHands}
            label="Religion"
            value={userData?.religion}
          />
          <Card icon={FaLandmark} label="Caste" value={userData?.caste} />
          <Card icon={FaTag} label="Sub-Caste" value={userData?.subCaste} />
        </div>
      </div>

      <div className="bg-gray-50 shadow-md rounded-2xl p-10 mb-8 mx-6">
        <p className="text-2xl font-bold text-primary mb-4">
          Communication Information
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <Card
            icon={FaPhone}
            label="Mobile Number"
            value={userData?.mobile}
          />
          <Card
            icon={FaGlobeAmericas}
            label="Country"
            value={userData?.locationDetails?.country?.name}
          />
          <Card
            icon={GiCapitol}
            label="State"
            value={userData?.locationDetails?.state?.name}
          />
          <Card
            icon={FaCity}
            label="City"
            value={userData?.locationDetails?.city?.name}
          />
        </div>
      </div>

      <div className="bg-gray-50 shadow-md rounded-2xl p-10 mb-8 mx-6">
        <p className="text-2xl font-bold text-primary mb-4">
          Education / Profession details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <Card
            icon={FaGraduationCap}
            label="Education"
            value={userData?.education}
          />
          <Card
            icon={FaBuilding}
            label="Job Type"
            value={
              userData?.jobType === "Others"
                ? userData?.otherJobType
                : userData?.jobType
            }
          />
        </div>
      </div>

      {showCards && (
        <div className="bg-gray-50 shadow-md rounded-2xl p-10 mb-8 mx-6">
          <p className="text-2xl font-bold text-primary mb-4">
            Uploaded Document Information
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <Card
              icon={FaBuilding}
              label="Documents"
              value={userData?.documents?.split("/").pop().replace(/^\d+-/, "")}
            />
          </div>
        </div>
      )}
      <div className="bg-gray-50 shadow-md rounded-2xl p-10 mb-8 mx-6">
        <p className="text-2xl font-bold text-primary mb-4">
          My Partner Preferences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <Card
            icon={FaHeart}
            label="Looking For"
            value={userData?.partnerPreferences?.lookingFor}
          />
          <Card
            icon={FaHeart}
            label="Partner Age"
            value={userData?.partnerPreferences?.partnerAge}
          />
          <Card
            icon={FaLanguage}
            label="Mother Tongue"
            value={userData?.partnerPreferences?.partnerMotherTongue}
          />  
          <Card
            icon={FaLandmark}
            label="Caste"
            value={userData?.partnerPreferences?.partnerCaste}
          />
           <Card
            icon={FaPrayingHands}
            label="Religion"
            value={userData?.partnerPreferences?.partnerReligion}
          />
        </div>
      </div>
    </>
  );
};

export default ViewProfileDetails;
