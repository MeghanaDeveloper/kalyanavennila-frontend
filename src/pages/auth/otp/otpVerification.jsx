import React, { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useAuthContextData } from "../../../context/AuthProvider";
import { resendOtp, verifyOtp } from "../../../services/authAPI's";
import { FaSpinner } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const OTPVerification = () => {
  const { setStep, setIsSignUpOpen } = useAuthContextData();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(90);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      toast.error("OTP has expired. Please Resend Code.", {
        position: "top-center",
        autoClose: 3000,
      });
      setCanResend(true);
      return;
    }
    const intervalId = setInterval(() => {
      setTimer((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (timer === 0) {
      toast.error("OTP has expired. Please Resend Code.");
      setLoading(false);
      return;
    }

    try {
      const response = await verifyOtp(otp);
      if (response.success) {
        setStep(5);
        setOtp("");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const response = await resendOtp();
      if (response.success) {
        setTimer(90);
        setOtp("");
        setCanResend(false);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10">
          <FaSpinner className="text-primary animate-spin text-4xl" />
        </div>
      )}

      <IoMdClose
        onClick={() => setIsSignUpOpen(false)}
        className="absolute top-5 right-5 text-primary text-lg transition-effects"
      />

      <div className="flex justify-center items-center pt-10">
        <div className="rounded-full p-4 border-white border-2 bg-green-700/20">
          <RiVerifiedBadgeFill className="text-green-700/70 text-3xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary text-center py-4">Verify your email address</h2>

      <p className="text-gray-600 text-center pb-6">Please enter the 6-digit code sent to your email:</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center px-6">
        <input
          type="text"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="textbox-styles"
          placeholder="Enter OTP"
          disabled={loading}
        />

        <div className="flex justify-between w-full text-primary font-semibold text-sm py-5 px-6">
          <span>{`00:${String(timer).padStart(2, "0")}`}</span>
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={!canResend || loading}
            className={`${canResend ? "text-primary cursor-pointer" : "text-gray-400 cursor-not-allowed"}`}
          >
            {loading ? <FaSpinner className="animate-spin" /> : "Resend OTP"}
          </button>
        </div>

        <div className="my-5">
          <button type="submit" className="button-styles flex justify-center items-center gap-2" disabled={loading}>
            {loading && <FaSpinner className="animate-spin" />}
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default OTPVerification;
