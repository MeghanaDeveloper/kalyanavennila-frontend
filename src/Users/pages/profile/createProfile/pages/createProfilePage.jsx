import React, { useState, useEffect } from "react";
import { ImProfile } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  getUserFullDetails,
  updateProfileDetails,
} from "../../../../services/profileAPI's";
import { motion as Motion } from "framer-motion";
import UserProfileForm from "../../profileForms/userProfileForm";
import PartnerPreferencesForm from "../../profileForms/partnerPreferencesForm";
import { Country, State } from "country-state-city";
import useProfileContextData from "../../../../hooks/useProfileContextData";
// import UploadProfileImage from "./uploadProfileImage";
// import UploadDocuments from "./uploadDocuments";

const CreateProfile = () => {
  const { setProfilePicUploaded, setDocumentsUploaded, setFormData, formData } =
    useProfileContextData();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const progress = useSelector((state) => state?.authReducer?.profileProgress);
  const userProfile = useSelector((state) => state?.authReducer?.userData);

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userProfile) {
      setFormData({
        gender: userProfile.gender || "",
        email: userProfile.email || "",
        mobile: userProfile.mobile || "",
        surName: userProfile.surName || "",
        firstName: userProfile.firstName || "",
        lastName: userProfile.lastName || "",
        motherTongue: userProfile.motherTongue || "",
        religion: userProfile.religion || "",
        caste: userProfile.caste || "",
        subCaste: userProfile.subCaste || "",
        dateOfBirth: userProfile.dateOfBirth
          ? userProfile.dateOfBirth.split("T")[0]
          : "",
        education: userProfile.education || "",
        jobType: userProfile.jobType || "",
        otherJobType: userProfile.otherJobType || "",
        languages: Array.isArray(userProfile.languages)
          ? userProfile.languages
          : [],
        locationDetails: {
          country: {
            code: userProfile?.locationDetails?.country?.code || "",
            name: userProfile?.locationDetails?.country?.name || "",
          },
          state: {
            code: userProfile?.locationDetails?.state?.code || "",
            name: userProfile?.locationDetails?.state?.name || "",
          },
          city: {
            code: userProfile?.locationDetails?.city?.code || "",
            name: userProfile?.locationDetails?.city?.name || "",
          },
        },
        partnerPreferences: {
          lookingFor: userProfile.partnerPreferences?.lookingFor || "",
          partnerAge: userProfile.partnerPreferences?.partnerAge || "",
          partnerReligion:
            userProfile.partnerPreferences?.partnerReligion ||
            "No Religion Bar",
          partnerCaste:
            userProfile.partnerPreferences?.partnerCaste || "No Caste Bar",
          partnerMotherTongue:
            userProfile.partnerPreferences?.partnerMotherTongue ||
            "No Language Bar",
        },
      });

      if (userProfile?.profilePic) {
        setProfilePicUploaded(true);
      }

      if (userProfile?.documents) {
        setDocumentsUploaded(true);
      }
    }
  }, [userProfile, setDocumentsUploaded, setProfilePicUploaded, setFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle country select
    if (name === "country") {
      const selectedCountry = Country.getCountryByCode(value);
      setFormData((prev) => ({
        ...prev,
        locationDetails: {
          ...prev.locationDetails,
          country: {
            code: value,
            name: selectedCountry?.name || "",
          },
          state: { code: "", name: "" }, // Reset
          city: { code: "", name: "" },
        },
      }));
    }

    // Handle state select
    else if (name === "state") {
      const selectedState = State.getStateByCodeAndCountry(
        value,
        formData.locationDetails.country.code
      );
      setFormData((prev) => ({
        ...prev,
        locationDetails: {
          ...prev.locationDetails,
          state: {
            code: value,
            name: selectedState?.name || "",
          },
          city: { code: "", name: "" }, // Reset
        },
      }));
    }

    // Handle city select
    else if (name === "city") {
      setFormData((prev) => ({
        ...prev,
        locationDetails: {
          ...prev.locationDetails,
          city: {
            code: value,
            name: value, // City names usually serve as both code and name
          },
        },
      }));
    }

    // Handle multi-select (languages)
    else if (name === "languages") {
      setFormData((prev) => ({
        ...prev,
        languages: e ? e.map((option) => option.value) : [],
      }));
    }

    // Handle partner preferences
    else if (
      [
        "lookingFor",
        "partnerAge",
        "partnerReligion",
        "partnerCaste",
        "partnerMotherTongue",
      ].includes(name)
    ) {
      setFormData((prev) => ({
        ...prev,
        partnerPreferences: {
          ...prev.partnerPreferences,
          [name]: value,
        },
      }));
    }

    // Default field update
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(updateProfileDetails(formData, progress, navigate));
      await dispatch(getUserFullDetails());
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        await dispatch(getUserFullDetails(navigate));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [dispatch, navigate]);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <div className=" flex items-center justify-center ">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 shadow-xl rounded-3xl w-full max-w-3xl my-9 py-9 relative"
        >
          <div className="flex justify-center items-center pt-5">
            <div className="rounded-full p-4 border-white border-2 bg-primary/20">
              <ImProfile className="text-primary/70 text-3xl" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary text-center pb-3 pt-3">
            Let's Create My Profile
          </h2>

          <div className=" mb-6 text-lg pl-7 font-semibold text-gray-400">
            Step {currentStep} of 2
          </div>

          {loading && (
            <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10">
              <FaSpinner className="text-primary animate-spin text-4xl" />
            </div>
          )}

          {currentStep === 1 && (
            <>
              <UserProfileForm
                handleChange={handleChange}
                formData={formData}
                setFormData={setFormData}
              />
            </>
          )}

          {currentStep === 2 && (
            <>
              <PartnerPreferencesForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
                loading={loading}
              />
            </>
          )}

          {/* {currentStep === 3 && <UploadProfileImage />}

          {currentStep === 4 && <UploadDocuments />} */}

          <div className=" bg-white shadow-md rounded-b-2xl  md:mx-14 pt-4 pb-10">
            <div className="flex justify-center items-center md:gap-20  gap-6 flex-wrap">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="bg-white border-4 text-lg font-bold cursor-pointer text-primary px-4 py-2 rounded-xl"
                >
                  Previous
                </button>
              )}
              {currentStep < 2 && (
                <button
                  onClick={nextStep}
                  className="bg-white border-4 text-lg font-bold cursor-pointer text-primary px-6 py-2 rounded-xl"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </Motion.div>
      </div>
    </>
  );
};

export default CreateProfile;
