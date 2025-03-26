import React, { useState, useEffect } from "react";
import { FaCloudUploadAlt, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { uploadProfileImage, updateProfileImage, deleteProfileImage } from "../../services/profileAPI's";
import { useNavigate } from "react-router-dom";

const UploadProfileImage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [profilePic, setProfilePic] = useState(null);
    const userProfile = useSelector((state) => state?.authReducer?.userData);

    useEffect(() => {
        if (userProfile?.profilePic) {
            setProfilePic(userProfile.profilePic);
        }
    }, [userProfile]);

    const handleProfilePicChange = async (e, isUpdate = false) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith("image/")) {
            return toast.error("Please upload a valid image file (JPG, PNG, JPEG).");
        }

        const previewURL = URL.createObjectURL(file);
        setProfilePic(previewURL);

        const formData = new FormData();
        formData.append("profile-pic", file);
console.log(formData)
        try {
            const response = isUpdate
                ? await dispatch(updateProfileImage(formData, navigate))
                : await dispatch(uploadProfileImage(formData, navigate));
                console.log(response)
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
        }
    };

    return (
        <>
            <p className="text-lg font-bold py-5 text-primary">
                {profilePic ? "Update Profile Picture :" : "Upload Profile Picture :"}
            </p>

            <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-center">
                {profilePic ? (
                    <div className="flex items-center justify-between gap-18">
                        <img src={profilePic} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full shadow-md" />

                        <div className="flex gap-6">
                        <label className="cursor-pointer bg-primary hover:bg-orange-400 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                <FaEdit size={18} />
                                <span>Edit</span>
                                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleProfilePicChange(e, true)} />
                            </label>

                            <button
                                onClick={handleDeleteProfilePic}
                                className="bg-red-500 hover:bg-red-300 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
                            >
                                <FaTrash size={18} />
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <label className="flex flex-col items-center cursor-pointer">
                        <FaCloudUploadAlt size={40} className="text-primary" />
                        <p className="text-gray-500">Click to upload</p>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleProfilePicChange(e, false)} />
                    </label>
                )}
            </div>
        </>
    );
};

export default UploadProfileImage;
