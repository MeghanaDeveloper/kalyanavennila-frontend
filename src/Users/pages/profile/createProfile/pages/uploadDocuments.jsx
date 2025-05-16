import React, { useState, useEffect, useRef } from "react";
import { FaFileAlt, FaTrash, FaUpload } from "react-icons/fa";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  deleteDocuments,
  updateDocuments,
  uploadDocuments,
} from "../../../../services/profileAPI's";
import useProfileContextData from "../../../../hooks/useProfileContextData";

const UploadDocuments = () => {
  const {setDocumentsUploaded, userProfile } = useProfileContextData()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [proofDocument, setProofDocument] = useState(
    userProfile?.documents || null
  );
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const response = proofDocument
        ? await dispatch(updateDocuments(formData, navigate))
        : await dispatch(uploadDocuments(formData, navigate));

      if (response?.success) {
        setProofDocument(response.data.documents);
        setDocumentsUploaded(true);
      } else {
        setProofDocument(userProfile?.documents || null);
        setDocumentsUploaded(false);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProofDoc = async () => {
    try {
      const response = await dispatch(deleteDocuments(navigate));
      if (response?.success) {
        setProofDocument(null);
        setFileName("");
        setDocumentsUploaded(false);
      } else {
        setDocumentsUploaded(true);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="md:p-12">
      <div className="bg-blue-50 shadow-md rounded-2xl px-7 pt-9 pb-16">
        <p className="text-xl font-bold text-primary pb-6">
          {proofDocument
            ? "Update Aadhar Card (.jpg):"
            : "Upload Aadhar Card (.jpg):"}
        </p>

        <div className="flex flex-col flex-wrap sm:flex-row items-center justify-between p-4 sm:p-6 gap-6 rounded-2xl border-4 border-gray-300 w-full max-w-4xl">
          <div className="flex items-center gap-2 flex-wrap ">
            <FaFileAlt className="text-primary text-xl" />
            <span className=" text-md truncate max-w-[180px] sm:max-w-none">
              {fileName || "No file selected"}
            </span>
          </div>

          <div className="flex flex-col flex-wrap sm:flex-row gap-9 w-full sm:w-auto">
            <button
              onClick={handleFileClick}
              className="bg-primary text-white px-4 py-2 rounded-md text-md flex items-center gap-3 hover:bg-amber-500 transition-effects cursor-pointer font-bold w-full sm:w-auto justify-center"
            >
              {loading ? (
                "Uploading..."
              ) : (
                <>
                  <FaUpload size={14} /> {proofDocument ? "Change" : "Upload"}
                </>
              )}
            </button>

            {proofDocument && (
              <button
                onClick={handleDeleteProofDoc}
                className="bg-red-500 text-white px-4 py-2 rounded-md text-md flex items-center gap-3 hover:bg-rose-400 transition-effects cursor-pointer font-bold w-full sm:w-auto justify-center"
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
    </div>
  );
};

export default UploadDocuments;
