import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const SignUpSuccessModal = ({ setStep}) => {
  return (
    <div className="text-center py-7">
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
          <FaCheckCircle className="text-green-500 text-7xl drop-shadow-md" />
        </Motion.div>

        <h2 className="text-3xl font-bold text-primary my-5">
          Account Created Successfully!
        </h2>
        <p className=" my-5">
          Your Account ID has been generated and <span className="block">sent to your registered email.</span> 
        </p>
        <p className=" my-6">Check your email for confirmation.</p>

        <p className=" my-6">If Account Id is generated then redirect to password generation page </p>

        <p
          className=" text-primary text-lg font-bold  underline transition-effects"
          onClick={() => setStep(5)}
        >
          Go to Password Generation Page
        </p>
      </div>
    </div>
  );
};

export default SignUpSuccessModal;
