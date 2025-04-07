import React from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowLeftLong, FaClipboardUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import useAuthContextData from "../../../../../hooks/useAuthContextData";

const SignUpModalStep2 = () => {
  const { setStep, formData, handleChange, setFormData, setIsSignUpOpen } =
    useAuthContextData();

  return (
    <>
      <div className="flex justify-between items-center pb-5">
        <FaArrowLeftLong
          onClick={() => setStep(1)}
          className="text-primary text-xl transition-effects"
        />
        <IoMdClose
          onClick={() => [setIsSignUpOpen(false)]}
          className=" text-primary text-xl transition-effects"
        ></IoMdClose>
      </div>

      <div className="flex justify-center items-center pb-5">
        <div className="rounded-full p-4 border-2 border-white bg-[#800000]/10">
          <FaClipboardUser className="text-[#800000]/40 text-3xl " />
        </div>
      </div>

      <form className="px-5 py-3">
        <div className="pb-9">
          <label htmlFor="email" className="label-styles">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="textbox-styles"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <AnimatePresence>
          {formData.email && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <label className="label-styles">Phone Number</label>

              <PhoneInput
                required
                name="mobile"
                defaultCountry="in"
                value={formData.mobile}
                onChange={(value) =>
                  setFormData({ ...formData, mobile: value })
                }
                placeholder="Enter your Mobile number"
                inputClassName="w-full border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-gray-500"
              />
            </Motion.div>
          )}
        </AnimatePresence>

        <div className="my-14">
          <AnimatePresence>
            {formData.email && formData.mobile && (
              <Motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="button-styles "
                onClick={() => setStep(3)}
              >
                Next
              </Motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
    </>
  );
};

export default SignUpModalStep2;
