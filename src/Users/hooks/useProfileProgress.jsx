
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProfileProgress } from '../redux/slices/authSlice';


const useProfileProgress = (formData, profilePicUploaded, documentsUploaded) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let requiredFields = Object.keys(formData).filter(
      (field) =>
        ![
          "otherJobType",
          "jobType",
          "partnerPreferences",
          "locationDetails",
        ].includes(field)
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
};

export default useProfileProgress;
