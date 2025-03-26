import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useAuthContextData } from "../../../context/AuthProvider";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const SignUpSuccessModal = () => {
  const { setStep, setIsSignUpOpen } = useAuthContextData()

  return (
    <>
      <IoMdClose
        onClick={() => [setIsSignUpOpen(false)]}
        className="absolute top-5 right-5  text-primary text-lg transition-effects">
      </IoMdClose>

      <div className="text-center py-4">
        <div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=''
        >
          <Motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex justify-center"
          >
            <RiVerifiedBadgeFill className="text-green-500 text-6xl drop-shadow-md" />
          </Motion.div>

          <h1 className="text-3xl font-bold text-primary my-4">
            🎉 Congratulations! <span className="block py-2">Your Account is Verified!</span>
          </h1>

          <p className="my-3">
            Your unique <span className="text-primary font-bold">Account ID</span> has been generated
            and sent to your <span className="block py-2">registered email address.</span>
          </p>

          <p className="my-3">
            You will need this Account ID to log in and create your password.
          </p>

          <p className="my-3">
            If you have received your Account ID, click below link to proceed to the
            <span className="block py-2">Password Creation Page.</span>
          </p>

          <p className="my-6 text-red-600 font-semibold">
            ⚠️ Important: Please **save your Account ID**. It will not be generated again!
          </p>

          <p
            className=" text-primary text-lg font-bold  underline transition-effects"
            onClick={() => setStep(6)}
          >
            Go to Password Generation Page
          </p>
        </div>
      </div>
    </>

  );
};

export default SignUpSuccessModal;
