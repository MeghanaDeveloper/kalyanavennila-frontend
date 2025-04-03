import React, { useState, useEffect, useRef } from "react";
import { FaFileAlt, FaTrash, FaUpload } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteDocuments, updateDocuments, uploadDocuments } from "../../services/profileAPI's";

const UploadDocuments = ({ proofDocument, setProofDocument, userProfile }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        if (userProfile?.documents) {
            setProofDocument(userProfile.documents);
            setFileName(userProfile.documents.split("/").pop());
        }
    }, [userProfile, setProofDocument]);

    const handleProofDocChange = async (e) => {
        const file = e.target.files[0];
        if (!file || !["image/jpeg", "image/jpg"].includes(file.type)) {
            return toast.error("Only JPG/JPEG files are allowed.");
        }

        setFileName(file.name);

        const formData = new FormData();
        formData.append("proof-document", file);

        try {
            const response = proofDocument
                ? await dispatch(updateDocuments(formData, navigate))
                : await dispatch(uploadDocuments(formData, navigate));

            if (response?.success) {
                setProofDocument(response.data.documents);
            } else {
                setProofDocument(userProfile?.documents || null);
            }
        } catch (error) {
            toast.error(error.message);
            setProofDocument(userProfile?.documents || null);
        }
    };

    const handleDeleteProofDoc = async () => {
        const response = await dispatch(deleteDocuments(navigate));
        if (response?.success) {
            setProofDocument(null);
            setFileName("");
        }
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="w-full px-4 sm:px-6">
            <p className="text-lg sm:text-xl font-bold text-gray-800 my-4 sm:my-6 text-center sm:text-left">
                {proofDocument ? "Update Aadhar Card (.jpg):" : "Upload Aadhar Card (.jpg):"}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 mx-auto sm:mx-7 mb-6 sm:mb-9 rounded-md border border-gray-300 w-full max-w-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                    <FaFileAlt className="text-primary text-lg sm:text-xl" />
                    <span className="text-gray-700 text-xs sm:text-sm truncate max-w-[180px] sm:max-w-none">
                        {fileName || "No file selected"}
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
                    <button
                        onClick={handleFileClick}
                        className="bg-primary text-white px-3 py-2 sm:py-1 rounded-md text-xs sm:text-sm flex items-center gap-2 hover:bg-amber-500 transition cursor-pointer font-bold w-full sm:w-auto justify-center"
                    >
                        <FaUpload size={14} /> {proofDocument ? "Change" : "Upload"}
                    </button>

                    {proofDocument && (
                        <button
                            onClick={handleDeleteProofDoc}
                            className="bg-red-600 text-white px-3 py-2 sm:py-1 rounded-md text-xs sm:text-sm flex items-center gap-2 hover:bg-red-700 transition cursor-pointer font-bold w-full sm:w-auto justify-center"
                        >
                            <FaTrash size={14} /> Remove
                        </button>
                    )}
                </div>
            </div>

            <input
                type="file"
                accept=".jpg,.jpeg"
                className="hidden"
                ref={fileInputRef}
                onChange={handleProofDocChange}
            />
        </div>
    );
};

export default UploadDocuments;
