import React, { useState, useEffect, useRef } from "react";
import { FaCamera, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { uploadProfileImage, updateProfileImage, deleteProfileImage } from "../../services/profileAPI's";
import { useNavigate } from "react-router-dom";

const UploadProfileImage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [profilePic, setProfilePic] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userProfile = useSelector((state) => state?.authReducer?.userData);

    useEffect(() => {
        if (userProfile?.profilePic) {
            setProfilePic(userProfile.profilePic);
        }
    }, [userProfile]);

    const handleProfilePicChange = async (e) => {
        const file = e.target.files[0];

        if (!file || !["image/jpeg", "image/jpg"].includes(file.type)) {
            return toast.error("Only JPG/JPEG files are allowed.");
        }

        const previewURL = URL.createObjectURL(file);
        setProfilePic(previewURL);

        const formData = new FormData();
        formData.append("profile-pic", file);

        try {
            const response = profilePic
                ? await dispatch(updateProfileImage(formData, navigate))
                : await dispatch(uploadProfileImage(formData, navigate));

            if (response?.success) {
                setProfilePic(response.data.profilePic);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleDeleteProfilePic = async () => {
        const response = await dispatch(deleteProfileImage(navigate));
        if (response?.success) {
            setProfilePic(null);
            setDropdownOpen(false);
        } else {
            toast.error("Failed to delete profile picture.");
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
            <p className="text-lg font-bold px-5 py-3">
                {profilePic ? "Update Profile Picture (.jpg) :" : "Upload Profile Picture (.jpg) :"}
            </p>

            <div className="flex flex-col items-center space-y-4 py-4 relative">


                <div className="relative">
                    <div className="w-36 h-36 rounded-full border-3 border-primary shadow-lg flex items-center justify-center bg-gray-200 cursor-pointer">
                        {profilePic ? (
                            <img
                                src={profilePic}
                                alt="Profile Preview"
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            <FaCamera className="text-primary" size={40} />
                        )}
                    </div>

                    <button
                        onClick={handleCameraClick}
                        className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-300"
                    >
                        <FaCamera className="text-gray-700" size={18} />
                    </button>

                    {profilePic && dropdownOpen && (
                        <div className="absolute bottom-12 right-0 bg-white shadow-lg rounded-md py-2 w-40 text-sm border border-gray-200">
                            <button
                                onClick={() => {
                                    fileInputRef.current.click();
                                    setDropdownOpen(false);
                                }}
                                className="w-full flex items-center px-3 py-2 hover:bg-gray-100"
                            >
                                <FaEdit className="mr-2 text-gray-800" /> Change Image
                            </button>
                            <button
                                onClick={handleDeleteProfilePic}
                                className="w-full flex items-center px-3 py-2 text-red-500 hover:bg-gray-100"
                            >
                                <FaTrash className="mr-2" /> Remove Image
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
        </>

    );
};

export default UploadProfileImage;
