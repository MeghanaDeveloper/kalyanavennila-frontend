import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createPassword } from "../../../services/authAPI's";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import useAuthContextData from "../../../hooks/useAuthContextData";

const PasswordGeneration = () => {
  const { setIsSignUpOpen, setStep } = useAuthContextData();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [passwordData, setPasswordData] = useState({
    accountId: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createPassword(passwordData);
      if (response.success) {
        setStep(7);
        setPasswordData({
          accountId: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error(error.message);
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
        onClick={() => [setIsSignUpOpen(false)]}
        className="absolute right-3 text-primary text-lg transition-effects"
      ></IoMdClose>

      <div className="flex justify-center items-center pb-3">
        <div className="rounded-full p-4 mt-6 border-2 border-white bg-red-700/10">
          <RiLockPasswordFill className="text-red-700/40 text-3xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary text-center">
        Generate Password
      </h2>

      <form className="px-5 py-3" onSubmit={handleSubmit}>
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
              value={passwordData.accountId}
              onChange={handleChange}
              placeholder="Enter Account ID"
              disabled={loading}
              autoComplete=""
            />
          </div>
        </div>

        <AnimatePresence>
          {passwordData.accountId && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pb-7 relative">
                <label htmlFor="password" className="label-styles">
                  Create Password
                </label>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="textbox-styles pr-10"
                    value={passwordData.password}
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
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {passwordData.password && (
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
                    value={passwordData.confirmPassword}
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
          {passwordData.accountId &&
            passwordData.password &&
            passwordData.confirmPassword && (
              <Motion.button
                type="submit"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`button-styles flex justify-center items-center gap-2 ${
                  loading ? "opacity-50 pointer-events-none" : ""
                }`}
                disabled={loading}
              >
                {loading && <FaSpinner className="animate-spin" />}
                Submit
              </Motion.button>
            )}
        </AnimatePresence>
      </form>

      <AnimatePresence>
        {passwordData.accountId && (
          <Motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg pl-2 font-bold underline text-primary">
              Password must contain:
            </h2>
            <ol className="pl-9 py-2 list-decimal">
              <li className="py-1">
                {" "}
                Must include at least 8 characters long.
              </li>
              <li className="py-1"> Must include at least 1 number.</li>
              <li className="py-1">
                {" "}
                Must include at least 1 special character (@, #, $).
              </li>
            </ol>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PasswordGeneration;
