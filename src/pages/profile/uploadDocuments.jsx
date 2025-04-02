import React, { useState, useEffect, useRef } from "react";
import { FaFileAlt, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteDocuments, updateDocuments, uploadDocuments } from "../../services/profileAPI's";

const UploadDocuments = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    // Get user profile from Redux
    const userProfile = useSelector((state) => state?.authReducer?.userData);

    // State for proof document preview & dropdown visibility
    const [proofDocument, setProofDocument] = useState(userProfile?.documents || null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        // Update the document preview if user profile changes
        if (userProfile?.documents) {
            setProofDocument(userProfile.documents);
        }
    }, [userProfile]);

    // Handle file selection for upload/update
    const handleProofDocChange = async (e) => {
        const file = e.target.files[0];
console.log('document', file)
        if (!file || !["image/jpeg", "image/jpg"].includes(file.type)) {
            return toast.error("Only JPG/JPEG files are allowed.");
        }

        // Show temporary preview before actual upload
        const previewURL = URL.createObjectURL(file);
        setProofDocument(previewURL);
console.log(previewURL)
        const formData = new FormData();
        formData.append("proof-document", file);
console.log('doc', formData, file)
        try {
            // Decide whether to upload or update the document
            const response = proofDocument
                ? await dispatch(updateDocuments(formData, navigate))
                : await dispatch(uploadDocuments(formData, navigate));

            if (response?.success) {
                setProofDocument(response.data.documents); // Set real URL after upload
            } else {
                toast.error("Upload failed.");
                setProofDocument(userProfile?.documents || null); // Reset if failed
            }
        } catch (error) {
            toast.error(error.message);
            setProofDocument(userProfile?.documents || null);
        }
    };

    // Handle document deletion
    const handleDeleteProofDoc = async () => {
        const response = await dispatch(deleteDocuments(navigate));
        if (response?.success) {
            setProofDocument(null);
            setDropdownOpen(false);
        } else {
            toast.error("Failed to delete proof document.");
        }
    };

    // Handle icon click for both opening file explorer & dropdown
    const handleFileClick = () => {
        if (!proofDocument) {
            fileInputRef.current.click(); // Open file explorer if no document is uploaded
        } else {
            setDropdownOpen(!dropdownOpen); // Toggle dropdown if document exists
        }
    };
console.log(proofDocument)
    return (
        <div className="relative">
            <p className="text-lg font-bold px-5 py-3">
                {proofDocument ? "Update Proof Document (.jpg) :" : "Upload Proof Document (.jpg) :"}
            </p>

            <div className="flex flex-col items-center space-y-4 py-4 relative">
                <div className="relative">
                    {/* Document Preview */}
                    {/* <div className="w-36 h-36 border-3 border-primary shadow-lg flex items-center justify-center bg-gray-200 cursor-pointer">
                        {proofDocument ? (
                            <img
                                src={proofDocument}
                                alt="Document Preview"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <FaFileAlt className="text-primary" size={40} />
                        )}
                    </div> */}

                    {/* Upload Icon (File Select / Dropdown Toggle) */}
                    <button
                        onClick={handleFileClick}
                        className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-300"
                    >
                        <FaFileAlt className="text-gray-700" size={18} />
                    </button>

                    {/* Dropdown Menu */}
                    {proofDocument && dropdownOpen && (
                        <div className="absolute bottom-12 right-0 bg-white shadow-lg rounded-md py-2 w-40 text-sm border border-gray-200">
                            {/* Change Document */}
                            <button
                                onClick={() => {
                                    fileInputRef.current.click();
                                    setDropdownOpen(false);
                                }}
                                className="w-full flex items-center px-3 py-2 hover:bg-gray-100"
                            >
                                <FaEdit className="mr-2 text-gray-800" /> Change Document
                            </button>
                            {/* Delete Document */}
                            <button
                                onClick={handleDeleteProofDoc}
                                className="w-full flex items-center px-3 py-2 text-red-500 hover:bg-gray-100"
                            >
                                <FaTrash className="mr-2" /> Remove Document
                            </button>
                        </div>
                    )}

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        accept=".jpg,.jpeg"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleProofDocChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default UploadDocuments;
