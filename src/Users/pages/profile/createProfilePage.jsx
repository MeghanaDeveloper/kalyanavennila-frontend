import React, { useState, useEffect } from "react";
import { ImProfile } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UploadProfileImage from "./uploadProfileImage";
import UploadFiles from "./uploadDocuments";
import { getUserFullDetails, updateProfileDetails } from "../../services/profileAPI's";
import { setProfileProgress } from "../../redux/slices/authSlice";
import { motion as Motion } from "framer-motion";
import UserProfileForm from "./profileForms/userProfileForm";
import PartnerPreferencesForm from "./profileForms/partnerPreferencesForm";
import { Country, State } from "country-state-city";

const CreateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const progress = useSelector((state) => state?.authReducer?.profileProgress);
  const userProfile = useSelector((state) => state?.authReducer?.userData);

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [documentsUploaded, setDocumentsUploaded] = useState(false);
  const [profilePicUploaded, setProfilePicUploaded] = useState(false);
  const [formData, setFormData] = useState({
    gender: "",
    email: "",
    mobile: "",
    surName: "",
    firstName: "",
    lastName: "",
    motherTongue: "",
    religion: "",
    caste: "",
    subCaste: "",
    dateOfBirth: "",
    education: "",
    jobType: "",
    otherJobType: "",
      locationDetails: {
      country: {
        code: "",
        name: "",
      },
      state: {
        code: "",
        name: "",
      },
      city: {
        code: "",
        name: "",
      },
    },
    partnerPreferences: {
      lookingFor: "",
      partnerAge: "",
      partnerReligion: "No Religion Bar",
      partnerCaste: "No Caste Bar",
      partnerMotherTongue: "No Language Bar",
    },
  });

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
  }, [userProfile]);

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
    const selectedState = State.getStateByCodeAndCountry(value, formData.locationDetails.country.code);
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
    ["lookingFor", "partnerAge", "partnerReligion", "partnerCaste", "partnerMotherTongue"].includes(name)
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
    console.log(formData)
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(updateProfileDetails(formData, progress, navigate));
      await dispatch(getUserFullDetails( ));
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

useEffect(() => {
  let requiredFields = Object.keys(formData).filter(
    (field) =>
      !["otherJobType", "jobType", "partnerPreferences", "locationDetails"].includes(field)
  );

  let filledFields = requiredFields.filter(
    (field) => formData[field] && formData[field].length > 0
  );

  // Partner Preferences
  const partnerFields = [
    "lookingFor",
    "partnerAge",
    "partnerReligion",
    "partnerCaste",
    "partnerMotherTongue",
  ];

  partnerFields.forEach((field) => {
    if (formData.partnerPreferences[field]) {
      filledFields.push(field);
    }
  });

  // Location Details
  const locationFields = ["country", "state", "city"];
  locationFields.forEach((locField) => {
    const value = formData.locationDetails?.[locField]?.name || "";
    if (value && value.length > 0) {
      filledFields.push(locField);
    }
  });

  let totalFields =
    requiredFields.length + partnerFields.length + locationFields.length;

  // JobType / OtherJobType logic
  if (formData.jobType === "Others") {
    if (formData.otherJobType) filledFields.push("otherJobType");
    totalFields++;
  } else if (formData.jobType && formData.jobType !== "Others") {
    filledFields.push("jobType");
    totalFields++;
  }

  // Profile Pic & Proof Document
  if (profilePicUploaded) filledFields.push("profilePic");
  if (documentsUploaded) filledFields.push("proofDocument");

  totalFields += 2;

  let progressValue = Math.round((filledFields.length / totalFields) * 100);

  if (
    filledFields.includes("profilePic") &&
    filledFields.includes("proofDocument") &&
    filledFields.length === totalFields
  ) {
    progressValue = 100;
  }

  const finalProgressValue = Math.max(0, Math.min(100, progressValue));
  dispatch(setProfileProgress(finalProgressValue));
}, [formData, profilePicUploaded, documentsUploaded, dispatch]);


  useEffect(() => {
    if (progress === 100 && userProfile?.isProfileStatus == "Pending") {
      setShowModal(true);
    }
  }, [progress, userProfile?.isProfileStatus]);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <div className=" flex items-center justify-center background-color">
      {loading && (
            <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10">
              <FaSpinner className="text-primary animate-spin text-4xl" />
            </div>
          )}
          
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 my-14 shadow-xl rounded-3xl md:px-10 px-2 py-10 w-full max-w-3xl relative"
        >
          <div className="flex justify-center items-center pt-5">
            <div className="rounded-full p-4 border-white border-2 bg-primary/20">
              <ImProfile className="text-primary/70 text-3xl" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary text-center pb-3 pt-3">
            Let's Create My Profile
          </h2>

          <p className="pl-7 font-bold text-lg text-primary">
            Profile Status :
          </p>
          <div className="flex items-center mx-6 mb-4">
            <div className="bg-gray-200 rounded-full h-3 flex-1">
              <div
                className="bg-green-500 h-3 rounded"
                style={{ width: `${progress || 0}%` }}
              ></div>
            </div>
            <span className="ml-3 text-lg font-bold text-primary">
              {progress}%
            </span>
          </div>

          <div className=" mb-6 text-lg pl-7 font-semibold text-gray-400">
            Step {currentStep} of 4
          </div>

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

          {currentStep === 3 && (
            <>
              <UploadProfileImage
                setProfilePicUploaded={setProfilePicUploaded}
                userProfile={userProfile}
              />
            </>
          )}

          {currentStep === 4 && (
            <>
              <UploadFiles
                setDocumentsUploaded={setDocumentsUploaded}
                userProfile={userProfile}
              />
            </>
          )}
 <div className=" bg-white shadow-md rounded-b-2xl  mx-4 pt-4 pb-10">
          <div className="flex justify-center items-center md:gap-20  gap-6 flex-wrap">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="bg-white border-4 text-lg font-bold cursor-pointer text-primary px-4 py-2 rounded-xl"
              >
                Previous
              </button>
            )}
            {currentStep < 4 && (
              <button
                onClick={nextStep}
                className="bg-white border-4 text-lg font-bold cursor-pointer text-primary px-6 py-2 rounded-xl"
              >
                Next
              </button>
            ) }
          </div>
          </div>
        </Motion.div>
      </div>

      {showModal && (
        <div className="fixed inset-0  bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 shadow-2xl ">
          <div className="bg-white border-4 border-primary bg-opacity-30 rounded-lg p-9 min-h-[55vh] max-h-[90vh] min-w-[35vw] max-w-[75vw] md:max-w-[45vw] overflow-y-scroll scrollbar-hide ">
            <h3 className=" text-3xl md:text-5xl font-italian py-4 font-bold text-primary text-center ">
              🎉 Profile Completion Successful!
            </h3>
            <p className="mt-4  font-bold">
              Your profile has been successfully submitted for approval. We will
              review your details and send you an email regarding your approval
              status.
              <span className="block py-4">
                Once approved, you will be able to subscribe and explore
                matching profiles.
              </span>
              <span>
                Please check your inbox, for the approval process may take some
                time depending on the profile details provided.
              </span>
            </p>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-primary text-white px-4 py-2 rounded-md  hover:bg-amber-500 transition-effects cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateProfile;
