import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuthContextData } from "../../../context/AuthProvider";

const PasswordGeneration = ({ isForgotPassword = false }) => {
  const { setStep, setIsSignUpOpen } = useAuthContextData();

  const [accountId, setAccountId] = useState("");
  const [tempPassword, setTempPassword] = useState(""); // Temporary password from email
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center pb-3">
        <p
          onClick={() => setIsSignUpOpen(false)}
          className="absolute top-5 right-5 text-primary text-lg font-bold underline transition-effects"
        >
          Close
        </p>

        <div className="rounded-full p-4 mt-6 border-2 border-white bg-red-700/10">
          <RiLockPasswordFill className="text-red-700/40 text-3xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold py-1 text-primary text-center">
        {isForgotPassword ? "Reset Password" : "Password Generation"}
      </h2>

      <form className="px-5 py-3">
        {/* Account ID Input */}
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
              value={accountId}
              onChange={(e) => setAccountId(e.target.value)}
              placeholder="Enter Account ID"
            />
          </div>
        </div>

        {/* Show Temporary Password only for Forgot Password flow */}
        <AnimatePresence>
          {isForgotPassword && accountId && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pb-9 relative">
                <label htmlFor="tempPassword" className="label-styles">
                  Temporary Password (Sent to Email)
                </label>
                <div className="mt-2">
                  <input
                    id="tempPassword"
                    name="tempPassword"
                    type="text"
                    className="textbox-styles"
                    value={tempPassword}
                    onChange={(e) => setTempPassword(e.target.value)}
                    placeholder="Enter Temporary Password"
                    required
                  />
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        {/* Password Fields */}
        <AnimatePresence>
          {(accountId && (!isForgotPassword || tempPassword)) && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pb-9 relative">
                <label htmlFor="password" className="label-styles">
                  Create Password
                </label>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="textbox-styles pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

        {/* Confirm Password Field */}
        <AnimatePresence>
          {password && (
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
          {confirmPassword && (
            <Motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="button-styles"
              onClick={() => setStep(6)}
            >
              Submit
            </Motion.button>
          )}
        </AnimatePresence>
      </form>
    </>
  );
};

export default PasswordGeneration;
