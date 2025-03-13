import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuthContextData } from "../../../context/AuthProvider";
import { resetPassword } from "../../../services/authAPI's";

const ResetPassword = () => {
  const { setIsSignUpOpen} = useAuthContextData();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetPasswordData, setResetPasswordData] = useState({
    accountId: '',
    temporaryPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setResetPasswordData({
      ...resetPasswordData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await resetPassword(resetPasswordData);
    if (response.success) {
      setIsSignUpOpen(false)
      setResetPasswordData({
        accountId: '',
        temporaryPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  }

  return (
    <>
      <div className="flex justify-center items-center pb-3">

        <div className="rounded-full p-4 mt-6 border-2 border-white bg-red-700/10">
          <RiLockPasswordFill className="text-red-700/40 text-3xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary text-center py-4">Change Password</h2>

      <form className="px-5 py-3">
        <div className="pb-9">
          <label htmlFor="accountId" className="label-styles">
            Account ID
          </label>
          <div className="mt-2">
            <input
              required
              id="accountId"
              name="accountId"
              type="text"
              className="textbox-styles"
              value={resetPasswordData.accountId}
              onChange={handleChange}
              placeholder="Enter Account ID"
            />
          </div>
        </div>

        <AnimatePresence>
          {resetPasswordData.accountId && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pb-9 relative">
                <label htmlFor="temporaryPassword" className="label-styles">
                  Temporary Password
                </label>
                <div className="mt-2">
                  <input
                    id="temporaryPassword"
                    name="temporaryPassword"
                    type="text"
                    className="textbox-styles"
                    value={resetPasswordData.temporaryPassword}
                    onChange={handleChange}
                    placeholder="Enter Temporary Password"
                    required
                  />
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {resetPasswordData.temporaryPassword && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pb-9 relative">
                <label htmlFor="newPassword" className="label-styles">
                  New Password
                </label>
                <div className="mt-2 relative">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type={showPassword ? "text" : "password"}
                    className="textbox-styles pr-10"
                    value={resetPasswordData.newPassword}
                    onChange={handleChange}
                    placeholder="Enter New Password"
                    required
                  />
                  <span
                    className="absolute top-3 right-3 cursor-pointer text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {resetPasswordData.newPassword && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pb-9 relative">
                <label htmlFor="confirmPassword" className="label-styles">
                  Confirm Password
                </label>
                <div className="mt-2 relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="textbox-styles pr-10"
                    value={resetPasswordData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter Password"
                    required
                  />
                  <span
                    className="absolute top-3 right-3 cursor-pointer text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <AnimatePresence>
          {resetPasswordData.accountId && resetPasswordData.temporaryPassword && resetPasswordData.newPassword && resetPasswordData.confirmPassword && (
            <Motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="button-styles"
              onClick={handleSubmit}
            >
              Submit
            </Motion.button>
          )}
        </AnimatePresence>
      </form>
    </>
  );
};  

export default ResetPassword;
