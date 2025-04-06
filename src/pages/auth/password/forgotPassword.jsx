import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaSpinner } from "react-icons/fa";
import { forgotPassword } from "../../../services/authAPI's";
import { toast } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import useAuthContextData from "../../../hooks/useAuthContextData";

const ForgotPassword = () => {
  const { setStep, setIsSignUpOpen } = useAuthContextData();

  const [accountId, setAccountId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await forgotPassword(accountId, email);
      if (response.success) {
        setStep(10);
        setAccountId("");
        setEmail("");
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
        onClick={() => setIsSignUpOpen(false)}
        className="absolute right-3  text-primary text-lg transition-effects"
      ></IoMdClose>

      <div className="flex justify-center items-center pt-10">
        <div className="rounded-full p-4 border-white border-2 bg-red-700/20">
          <RiLockPasswordFill className="text-red-700/70 text-3xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary text-center py-2">
        Forgot Password
      </h2>

      <form className="px-5 py-3 relative" onSubmit={handleSubmit}>
        <div className="pb-5">
          <label htmlFor="accountId" className="label-styles">
            Account Id
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
              placeholder="Account Id"
              disabled={loading}
            />
          </div>
        </div>

        <div className="pb-12">
          <label htmlFor="email" className="label-styles">
            Email
          </label>
          <div className="mt-1 relative">
            <input
              id="email"
              name="email"
              type="email"
              className="textbox-styles pr-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="mt-6 mb-3">
          <button
            type="submit"
            className={`button-styles flex justify-center items-center gap-2 ${
              loading ? "opacity-50 pointer-events-none" : ""
            }`}
            disabled={loading}
          >
            {loading && <FaSpinner className="animate-spin" />}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
