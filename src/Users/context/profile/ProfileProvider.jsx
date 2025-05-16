import React, { useState } from "react";
import { ProfileContext } from "./ProfileContext";
import { useSelector } from "react-redux";
import useProfileProgress from "../../hooks/useProfileProgress";

const ProfileProvider = ({ children }) => {
  const userProfile = useSelector((state) => state?.authReducer?.userData);

  const [profileModalOpen, setProfileModalOpen] = useState(false);
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

  useProfileProgress(formData, profilePicUploaded, documentsUploaded);

  return (
    <>
      <ProfileContext.Provider
        value={{
          profileModalOpen,
          setProfileModalOpen,
          documentsUploaded,
          setDocumentsUploaded,
          profilePicUploaded,
          setProfilePicUploaded,
          userProfile,
          formData,
          setFormData,
        }}
      >
        {children}
      </ProfileContext.Provider>
    </>
  );
};

export default ProfileProvider;
