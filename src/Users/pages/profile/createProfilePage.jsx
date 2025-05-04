import React, { useState, useEffect } from "react";
import { ImProfile } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UploadProfileImage from "./uploadProfileImage";
import UploadFiles from "./uploadDocuments";
import { getUserFullDetails } from "../../services/authAPI's";
import { updateProfileDetails } from "../../services/profileAPI's";
import { setProfileProgress } from "../../redux/slices/authSlice";
import ProfilePageForm from "./profilePageForm";
import { motion as Motion } from "framer-motion";

const CreateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const progress = useSelector((state) => state?.authReducer?.profileProgress);
  const userProfile = useSelector((state) => state?.authReducer?.userData);

  useEffect(() => {
    const fetchUserDetails = async () => {
      await dispatch(getUserFullDetails(navigate));
    };

    fetchUserDetails();
  }, [dispatch, navigate]);

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
    lookingFor: "",
    partnerAge: "",
    languages: "",
    partnerReligion: "",
    partnerCaste: "",
    partnerMotherTongue: "",
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
        lookingFor: userProfile.lookingFor || "",
        partnerAge: userProfile.partnerAge || "",
        languages: Array.isArray(userProfile.languages)
          ? userProfile.languages
          : [],
        partnerReligion: userProfile.partnerReligion || "No Religion Bar",
        partnerMotherTongue:
          userProfile.partnerMotherTongue || "No Language Bar",
        partnerCaste: userProfile.partnerCaste || "No Caste Bar",
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
    const { name, value } = e.target || {};

    if (name === "languages") {
      setFormData({
        ...formData,
        languages: e ? e.map((option) => option.value) : [],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
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
    let requiredFields = Object.keys(formData).filter(
      (field) => !["otherJobType", "jobType"].includes(field)
    );

    let filledFields = requiredFields.filter(
      (field) => formData[field] && formData[field].length > 0
    );

    let totalFields = requiredFields.length;

    if (formData.jobType === "Others") {
      if (formData.otherJobType) filledFields.push("otherJobType");
      totalFields++;
    } else if (formData.jobType && formData.jobType !== "Others") {
      filledFields.push("jobType");
      totalFields++;
    }

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

  return (
    <>
      <div className=" flex items-center justify-center background-color">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white my-14 mx-4 shadow-xl rounded-3xl p-10 w-full max-w-3xl relative"
        >
          {loading && (
            <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10">
              <FaSpinner className="text-primary animate-spin text-4xl" />
            </div>
          )}

          <div className="flex justify-center items-center pt-5">
            <div className="rounded-full p-4 border-white border-2 bg-primary/20">
              <ImProfile className="text-primary/70 text-3xl" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary text-center pb-3 pt-3">
            Let's Create My Profile
          </h2>

          <div className="flex items-center mx-6 mb-4">
            <div className="bg-gray-200 rounded-full h-2.5 flex-1">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${progress || 0}%` }}
              ></div>
            </div>
            <span className="ml-3 text-lg font-bold text-primary">
              {progress}%
            </span>
          </div>

          <UploadProfileImage
            setProfilePicUploaded={setProfilePicUploaded}
            userProfile={userProfile}
          />

          <ProfilePageForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
            loading={loading}
          />

          <UploadFiles
            setDocumentsUploaded={setDocumentsUploaded}
            userProfile={userProfile}
          />
        </Motion.div>
      </div>

      {showModal && (
        <div className="fixed inset-0  bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 shadow-2xl ">
          <div className="bg-white border-4 border-primary bg-opacity-30 rounded-lg p-9 min-h-[55vh] max-h-[90vh] min-w-[35vw] max-w-[75vw] md:max-w-[35vw] overflow-y-scroll scrollbar-hide ">
            <h3 className="text-5xl font-italian py-4 font-bold text-primary text-center ">
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
