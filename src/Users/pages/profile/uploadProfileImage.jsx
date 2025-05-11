import React, { useState, useEffect, useRef } from "react";
import { FaCamera, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  uploadProfileImage,
  updateProfileImage,
  deleteProfileImage,
} from "../../services/profileAPI's";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";

const UploadProfileImage = ({ setProfilePicUploaded, userProfile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [profilePic, setProfilePic] = useState(userProfile?.profilePic || null);

  useEffect(() => {
    if (userProfile?.profilePic) {
      setProfilePic(userProfile.profilePic);
    }
  }, [userProfile, setProfilePic]);

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !["image/jpeg", "image/jpg"].includes(file.type)) {
      toast.error("Only JPG/JPEG files are allowed.");
      setUploadStatus("error");
      return;
    }

    const previewURL = URL.createObjectURL(file);
    setProfilePic(previewURL);
    setUploadStatus(null);

    const formData = new FormData();
    formData.append("profile-pic", file);

    try {
      const response = profilePic
        ? await dispatch(updateProfileImage(formData, navigate))
        : await dispatch(uploadProfileImage(formData, navigate));

      if (response?.success) {
        setProfilePic(response.data.profilePic);
        setUploadStatus("success");
        setProfilePicUploaded(true);
      } else {
        setUploadStatus("error");
        setProfilePicUploaded(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteProfilePic = async () => {
    try {
      const response = await dispatch(deleteProfileImage(navigate));
      if (response?.success) {
        setProfilePic(null);
        setDropdownOpen(false);
        setProfilePicUploaded(false);
      } else {
        setProfilePicUploaded(true);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleCameraClick = () => {
    if (!profilePic) {
      fileInputRef.current.click();
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <>
      <div className="px-4">
        <div className="bg-gray-50 shadow-md rounded-t-2xl px-7 pt-9 pb-16">
          <p className="text-xl font-bold text-primary pb-6">
            {profilePic
              ? "Update Profile Picture (.jpg) :"
              : "Upload Profile Picture (.jpg) :"}
          </p>

          <div className="flex flex-col items-center pt-4 relative">
            <div className="relative">
              <div className="w-44 h-44 rounded-2xl border-2 border-primary shadow-lg flex items-center justify-center bg-gray-200 cursor-pointer">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile Preview"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <FaCamera className="text-primary" size={40} />
                )}
              </div>

              {/* Success/Error Mark */}
              {uploadStatus === "success" && (
                <span className="absolute top-17 left-52 bg-green-500 text-white text-xl rounded-full px-2 py-1 ">
                  <TiTick />
                </span>
              )}
              {uploadStatus === "error" && (
                <span className="absolute top-17 left-52 bg-red-500 text-white text-xl font-bold   rounded-full px-2 py-1">
                  <RiCloseLargeFill />
                </span>
              )}

              <button
                onClick={handleCameraClick}
                className="absolute bottom-[-5px] right-[-15px]  p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-300 bg-primary border-0"
              >
                <FaCamera className="text-white" size={18} />
              </button>

              {profilePic && dropdownOpen && (
                <div className="absolute bottom-6 right-0 bg-white shadow-xl rounded-md py-2 w-52 text-lg border-2 font-bold border-primary">
                  <button
                    onClick={() => {
                      fileInputRef.current.click();
                      setDropdownOpen(false);
                    }}
                    className="w-full flex items-center px-3 py-2"
                  >
                    <FaEdit className="mr-3" /> Change Image
                  </button>
                  <button
                    onClick={handleDeleteProfilePic}
                    className="w-full flex items-center px-3 py-2 text-red-500 hover:bg-gray-100"
                  >
                    <FaTrash className="mr-3" /> Remove Image
                  </button>
                </div>
              )}

              <input
                type="file"
                accept=".jpg,.jpeg"
                className="hidden"
                ref={fileInputRef}
                onChange={handleProfilePicChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadProfileImage;
