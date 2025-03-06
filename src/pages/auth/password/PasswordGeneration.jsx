import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordGeneration = ({ setStep }) => {
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

  return (
    <>
      <div className="flex justify-center items-center pb-3">

        <div className="rounded-full p-4 mt-6  border-2  border-white bg-red-700/10">
          <RiLockPasswordFill className="text-red-700/40 text-3xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold py-1 text-primary text-center">Password Generation</h2>

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
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                placeholder="Enter Account ID"
              />
            </div>
          </div>

          <AnimatePresence>
            {accountId && (
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
                      type={showPassword ? "text" : "password"} // 👀 Toggle Type
                      className="textbox-styles pr-10" // Right padding for icon
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      required
                    />
                    {/* 👁 Toggle Password Icon */}
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
                      type={showConfirmPassword ? "text" : "password"} // 👀 Toggle Type
                      className="textbox-styles pr-10" // Right padding for icon
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter Password"
                      required
                    />
                    {/* 👁 Toggle Confirm Password Icon */}
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
