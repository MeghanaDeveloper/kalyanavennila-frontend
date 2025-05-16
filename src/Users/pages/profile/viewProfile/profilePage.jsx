import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaSpinner
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserFullDetails } from "../../../services/profileAPI's";
import { motion as Motion } from "framer-motion";
import toast from "react-hot-toast";
import ViewProfileDetails from "../common/viewProfileDetails";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.authReducer);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        await dispatch(getUserFullDetails(navigate));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [dispatch, navigate]);

  return (
    <>
      <div className="background-color padding-tb">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 mx-auto py-16 shadow-xl rounded-3xl md:max-w-3xl lg:max-w-4xl relative"
        >
          <div className="flex flex-wrap gap-6 px-10 sm:justify-between justify-center items-center pb-9">
            <p className="text-primary font-bold text-5xl font-italian">
              My Profile
            </p>

            <button
              onClick={() => navigate("/create-profile")}
              className="flex items-center gap-2 font-bold transition-effects bg-primary text-white rounded-2xl px-4 py-2 hover:bg-amber-500"
            >
              <FaEdit size={20} />
              <span>Edit</span>
            </button>
          </div>

          {loading && (
            <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10">
              <FaSpinner className="text-primary animate-spin text-4xl" />
            </div>
          )}

          <ViewProfileDetails userData={userData} showCards={true} />
        </Motion.div>
      </div>
    </>
  );
};

export default ProfilePage;
