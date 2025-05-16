import React from 'react'
import { FaUser } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import useAuthContextData from '../../../../../hooks/useAuthContextData';

const SignUpModalStep1 = () => {
  const { setStep, setIsSignUpOpen, formData, handleChange } = useAuthContextData()

  return (
    <>
    
      <IoMdClose
        onClick={() => [setIsSignUpOpen(false)]}
        className="absolute top-5 right-5  text-primary text-lg transition-effects">
      </IoMdClose>

      <p className='text-xl text-blue-700 font-bold pt-9 text-center'>Currently we are registering manually please write to us at services@kalyanavennila.com</p>


      <div className="flex justify-center items-center pt-6 lg:pt-10 ">
        <div className='rounded-full p-4 border-2 border-white bg-primary/10'>
          <FaUser className="text-primary/40 text-3xl " />
        </div>
      </div>

      <h2 className="text-2xl font-bold p y-2 text-primary text-center">Sign Up For Free</h2>

      <form className="px-5 py-3">
        <div className='pb-9'>
          <label className="label-styles">Created By</label>
          <div className="mt-2 relative">
            <select
              name='accountCreatedBy'
              value={formData.accountCreatedBy}
              onChange={handleChange}
              className="dropdown-styles"
              required
            >
              <option value="">Select an Option</option>
              <option value='Parent'>Parent</option>
              <option value='Myself'>Myself</option>
              <option value='Guardian'>Guardian</option>
              <option value='Sister'>Sister</option>
              <option value='Brother'>Brother</option>
              <option value='Relative'>Relative</option>
              <option value='Friend'>Friend</option>
            </select>
            <MdOutlineKeyboardArrowDown className="absolute top-3 right-3 text-gray-500" />
          </div>
        </div>

        <AnimatePresence>
          {formData.accountCreatedBy && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <label className="label-styles">Bride/Groom Gender</label>
              <div className="mt-2 relative">
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={handleChange}
                  className="dropdown-styles"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
                <MdOutlineKeyboardArrowDown className="absolute top-3 right-3 text-gray-600" />
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        <div className='my-6 sm:my-10'>
          <AnimatePresence>
            {formData.accountCreatedBy && formData.gender && (
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