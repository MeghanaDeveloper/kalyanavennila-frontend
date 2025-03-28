import React, { useState, useEffect, useRef } from "react";
import { FaCamera, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {updateDocuments, uploadDocuments, deleteDocuments } from "../../services/profileAPI's";
import { useNavigate } from "react-router-dom";

const UploadFiles = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [documentsImage, setDocumentsImage] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const userProfile = useSelector((state) => state?.authReducer?.userData);

    useEffect(() => {
        if (userProfile?.documents) {
            setDocumentsImage(userProfile.documents);
        }
    }, [userProfile]);

    const handleChangeDocuments = async (e) => {
        const file = e.target.files[0];

        if (!file || !["image/jpeg", "image/jpg"].includes(file.type)) {
            return toast.error("Only JPG/JPEG files are allowed.");
        }

        const previewURL = URL.createObjectURL(file);
        setDocumentsImage(previewURL);

        const formData = new FormData();
        formData.append("documents", file);
        try {
            const response = documentsImage
                ? await dispatch(updateDocuments(formData, navigate))
                : await dispatch(uploadDocuments(formData, navigate));

            if (response?.success) {
                setDocumentsImage(response.data.documents);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleDeleteDocuments = async () => {
        const response = await dispatch(deleteDocuments(navigate));
        if (response?.success) {
            setDocumentsImage(null);
            setDropdownOpen(false);
        } else {
            toast.error("Failed to delete profile picture.");
        }
    };

    const handleCameraClick = () => {
        if (!documentsImage) {
            fileInputRef.current.click();
        } else {
            setDropdownOpen(!dropdownOpen);
        }
    };
    return (
        <>
            <p className="text-lg font-bold px-5 py-3">
                {documentsImage ? "Update Aadhar Card (.jpg) :" : "Upload Aadhar Card (.jpg) :"}
            </p>

            <div className="flex flex-col items-center space-y-4 py-4 relative">


                <div className="relative">
                    <div className="w-44 h-44 rounded border-3 border-primary shadow-lg flex items-center justify-center bg-gray-200 cursor-pointer">
                        {documentsImage ? (
                            <img
                                src={documentsImage}
                                alt="Profile Preview"
                                className="w-full h-full object-cover rounded"
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

                    {documentsImage && dropdownOpen && (
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
                                onClick={handleDeleteDocuments}
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
                        onChange={handleChangeDocuments}
                    />
                </div>
            </div>
        </>

    );
};

export default UploadFiles;
