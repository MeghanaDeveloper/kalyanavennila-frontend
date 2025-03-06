import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion as Motion, AnimatePresence } from "framer-motion";

const SignUpModalStep1 = ({ setStep, setIsSignUpOpen }) => {
  const [createdBy, setCreatedBy] = useState("");
  const [gender, setGender] = useState("");
  return (
    <>
      <p
        onClick={() => setIsSignUpOpen(false)}
        className="absolute top-5 right-5  text-primary text-lg font-bold  underline transition-effects">
        GoBack
      </p>

      <div className="flex justify-center items-center pt-6 lg:pt-10 ">
        <div className='rounded-full p-4 border-2 border-white bg-primary/10'>
          <FaUser className="text-primary/40 text-3xl " />
        </div>
      </div>

      <h2 className="text-2xl font-bold py-2 text-primary text-center">Sign Up For Free</h2>

      <form className="px-5 py-3">
        <div className='pb-9'>
          <label className="label-styles">Created By</label>
          <div className="mt-2 relative">
            <select
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              className="dropdown-styles"
              required
            >
              <option >Select an Option</option>
              <option>Myself</option>
              <option>Parent</option>
              <option>Guardian</option>
              <option>Sister</option>
              <option>Brother</option>
              <option>Relative</option>
              <option>Friend</option>
            </select>
            <MdOutlineKeyboardArrowDown className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>

        <AnimatePresence>
          {createdBy && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <label className="label-styles">Bride/Groom Gender</label>
              <div className="mt-2 relative">
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="dropdown-styles"
                  required
                >
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <MdOutlineKeyboardArrowDown className="absolute top-3 right-3 text-gray-600" />
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        <div className='my-6 sm:my-10'>
          <AnimatePresence>
            {gender && (
              <Motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="button-styles"
                onClick={() => setStep(2)}
              >
                Next
              </Motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>
    </>
  )
}

export default SignUpModalStep1