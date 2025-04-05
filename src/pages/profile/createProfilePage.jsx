import React, { useState, useEffect } from "react";
import { ImProfile } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import UploadProfileImage from "./uploadProfileImage";
import UploadFiles from "./uploadDocuments";
import { updateProfileDetails } from "../../services/profileAPI's";

const CreateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userProfile = useSelector((state) => state.authReducer.userData);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [proofDocument, setProofDocument] = useState(
    userProfile?.documents || null
  );
  const [profilePic, setProfilePic] = useState(userProfile?.profilePic || null);
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
      const response = await dispatch(updateProfileDetails(formData, navigate));
      if (response.success && progress === 100) {
        setShowModal(true);
      }
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

    if (profilePic) filledFields.push("profilePic");
    if (proofDocument) filledFields.push("proofDocument");

    totalFields += 2;

    let progressValue = Math.round((filledFields.length / totalFields) * 100);

    if (
      filledFields.includes("profilePic") &&
      filledFields.includes("proofDocument") &&
      filledFields.length === totalFields
    ) {
      progressValue = 100;
    }

    setProgress(progressValue);
  }, [formData, profilePic, proofDocument]);

  console.log(progress);
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-br from-[#E0BBE4] via-[#957DAD] to-[#D291BC]">
        <div className="bg-white my-14 mx-4 shadow-xl rounded-3xl p-10 w-full max-w-3xl relative">
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
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="ml-3 text-lg font-bold text-primary">
              {progress}%
            </span>
          </div>

          <UploadProfileImage
            profilePic={profilePic}
            setProfilePic={setProfilePic}
            userProfile={userProfile}
          />

          <form className="px-5 py-3" onSubmit={handleSubmit}>
            <div className="pb-5">
              <label className="label-styles">Surname</label>
              <input
                type="text"
                name="surName"
                className="textbox-styles"
                value={formData.surName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">First Name</label>
              <input
                type="text"
                name="firstName"
                className="textbox-styles"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="textbox-styles"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Email</label>
              <input
                type="email"
                name="email"
                className="textbox-styles bg-gray-200 text-gray-500 cursor-not-allowed"
                value={formData.email}
                onChange={handleChange}
                required
                disabled
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Mobile</label>
              <input
                type="text"
                name="mobile"
                className="textbox-styles  bg-gray-200 text-gray-500 cursor-not-allowed"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="textbox-styles cursor-pointer"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Caste</label>
              <input
                type="text"
                name="caste"
                className="textbox-styles"
                value={formData.caste}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Sub Caste</label>
              <input
                type="text"
                name="subCaste"
                className="textbox-styles"
                value={formData.subCaste}
                onChange={handleChange}
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Mother Tongue</label>
              <input
                type="text"
                name="motherTongue"
                className="textbox-styles"
                value={formData.motherTongue}
                onChange={handleChange}
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Religion</label>
              <input
                type="text"
                name="religion"
                className="textbox-styles"
                value={formData.religion}
                onChange={handleChange}
              />
            </div>

            {/* Dropdown Fields */}
            <div className="pb-5">
              <label className="label-styles">Gender</label>
              <select
                name="gender"
                className="textbox-styles"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Education</label>
              <select
                name="education"
                className="textbox-styles"
                value={formData.education}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Professional Degree">Professional Degree</option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="Graduation">Graduation</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Job Type</label>
              <select
                name="jobType"
                className="textbox-styles"
                value={formData.jobType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Govt">Govt</option>
                <option value="MNC">MNC</option>
                <option value="Private">Private</option>
                <option value="NRI">NRI</option>
                <option value="Business">Business</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {formData.jobType === "Others" && (
              <div className="pb-5">
                <label className="label-styles">Specify Job Type</label>
                <input
                  type="text"
                  name="otherJobType"
                  className="textbox-styles"
                  value={formData.otherJobType}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="pb-5">
              <label className="label-styles">Known Languages</label>
              <Select
                isMulti
                name="languages"
                options={[
                  { value: "Tamil", label: "Tamil" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "English", label: "English" },
                  { value: "Telugu", label: "Telugu" },
                  { value: "Malayalam", label: "Malayalam" },
                  { value: "Kannada", label: "Kannada" },
                  { value: "Marathi", label: "Marathi" },
                  { value: "Gujarati", label: "Gujarati" },
                  { value: "Bengali", label: "Bengali" },
                  { value: "Punjabi", label: "Punjabi" },
                  { value: "Urdu", label: "Urdu" },
                ]}
                className="basic-multi-select"
                classNamePrefix="select"
                value={(formData.languages || []).map((lang) => ({
                  value: lang,
                  label: lang,
                }))}
                onChange={(selectedOptions) =>
                  setFormData({
                    ...formData,
                    languages: selectedOptions
                      ? selectedOptions.map((option) => option.value)
                      : [],
                  })
                }
              />
            </div>

            <p className="text-primary font-bold text-2xl py-5">
              My Partner Preferences :
            </p>

            <div className="pb-5">
              <label className="label-styles">Looking For</label>
              <select
                name="lookingFor"
                className="textbox-styles"
                value={formData.lookingFor}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Bride">Bride</option>
                <option value="Groom">Groom</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Partner Age</label>
              <select
                name="partnerAge"
                className="textbox-styles"
                value={formData.partnerAge}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="21-25">21-25</option>
                <option value="25-30">25-30</option>
                <option value="30-35">30-35</option>
                <option value="35-40">35-40</option>
                <option value="40-45">40-45</option>
                <option value="45-50">45-50</option>
                <option value="50-55">50-55</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Religion</label>
              <input
                type="text"
                name="partnerReligion"
                className="textbox-styles"
                value={formData.partnerReligion}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Caste</label>
              <input
                type="text"
                name="partnerCaste"
                className="textbox-styles"
                value={formData.partnerCaste}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Mother Tongue</label>
              <input
                type="text"
                name="partnerMotherTongue"
                className="textbox-styles"
                value={formData.partnerMotherTongue}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-4">
              <button
                type="submit"
                className="button-styles"
                disabled={loading}
              >
                {loading ? <FaSpinner className="animate-spin" /> : "Update"}
              </button>
            </div>
          </form>

          <UploadFiles
            proofDocument={proofDocument}
            setProofDocument={setProofDocument}
            userProfile={userProfile}
          />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 shadow-2xl ">
          <div className="bg-gray-500 bg-opacity-60 rounded-lg p-9 min-h-[55vh] max-h-[90vh] min-w-[35vw] max-w-[75vw] md:max-w-[35vw] overflow-y-scroll scrollbar-hide ">
            <h3 className="text-2xl py-4 font-bold text-primary text-center ">
              🎉 Profile Completion Successful!
            </h3>
            <p className="mt-4 text-white font-bold">
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
