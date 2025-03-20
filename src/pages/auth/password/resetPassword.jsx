import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useAuthContextData } from "../../../context/AuthProvider";
import { resetPassword } from "../../../services/authAPI's";
import { toast } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { MdError } from "react-icons/md";


const ResetPassword = () => {
  const { setIsSignUpOpen } = useAuthContextData();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [resetPasswordData, setResetPasswordData] = useState({
    accountId: '',
    temporaryPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setResetPasswordData({
      ...resetPasswordData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('password', resetPasswordData)
      const response = await resetPassword(resetPasswordData);
      console.log(response)
      if (response.success) {
        console.log('response')
        console.log(response)
        setIsSignUpOpen(false);
        setResetPasswordData({
          accountId: '',
          temporaryPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      toast.error(error.message );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10">
          <FaSpinner className="text-primary animate-spin text-4xl" />
        </div>
      )}

      <IoMdClose
        onClick={() => setIsSignUpOpen(false)}
        className="absolute right-3  text-primary text-lg transition-effects">
      </IoMdClose>

      <div className="flex justify-center items-center pb-3">
        <div className="rounded-full p-4 mt-6 border-2 border-white bg-red-700/10">
          <RiLockPasswordFill className="text-red-700/40 text-3xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary text-center py-4">Change Password</h2>

      <form className="px-5 py-3" onSubmit={handleSubmit}>
        <div className="pb-9">
          <label htmlFor="accountId" className="label-styles">Account ID</label>
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
              disabled={loading}
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
                <label htmlFor="temporaryPassword" className="label-styles">Temporary Password</label>
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
                    disabled={loading}
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
                <label htmlFor="newPassword" className="label-styles">New Password</label>
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
                    disabled={loading}
                  />
                  <span
                    className="absolute top-3 right-3 cursor-pointer text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <p className="text-sm text-gray-400 flex items-center gap-2 my-2">
                  <MdError className="text-primary text-xl" />
                  Must be 8+ characters with 1 number & 1 special character (@, #, $)
                </p>
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
                <label htmlFor="confirmPassword" className="label-styles">Confirm Password</label>
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
                    disabled={loading}
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

        <AnimatePresence>
          {resetPasswordData.accountId && resetPasswordData.temporaryPassword && resetPasswordData.newPassword && resetPasswordData.confirmPassword && (
            <Motion.button
              type="submit"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`button-styles flex justify-center items-center gap-2 ${loading ? "opacity-50 pointer-events-none" : ""}`}
              disabled={loading}
            >
              {loading && <FaSpinner className="animate-spin" />}
              Submit
            </Motion.button>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default ResetPassword;
