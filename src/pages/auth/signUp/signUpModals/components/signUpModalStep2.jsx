import React, { useState } from 'react'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowLeftLong, FaClipboardUser } from 'react-icons/fa6';
import { useAuthContextData } from '../../../../../context/AuthProvider';

const SignUpModalStep2 = () => {
   const { setStep } = useAuthContextData()

      const [mobile, setMobile] = useState(0)
      const [email, setEmail] = useState(false)
  return (
    <>
    <FaArrowLeftLong onClick={() => setStep(1)} className="text-primary text-4xl transition-effects" />

    <div className="flex justify-center items-center pb-5">
      <div className='rounded-full p-4 border-2 border-white bg-[#800000]/10'>
        <FaClipboardUser className="text-[#800000]/40 text-3xl " />
      </div>
    </div>
    <form className="px-5 py-3">
        <div className='pb-9'>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"

            />
          </div>
        </div>

        <AnimatePresence>
          {email && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <label className="label-styles">Phone Number</label>

              <PhoneInput
              required
                defaultCountry="IN"
                value={mobile}
                onChange={(value) => setMobile(value)}
                placeholder='Enter your Mobile number'
                inputClassName="w-full border border-gray-200 rounded-md p-2 focus:ring-2 focus:ring-gray-500"
              />

            </Motion.div>
          )}
        </AnimatePresence>

      <div className='my-14'>
      <AnimatePresence>
        {mobile && (
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
  )
}

export default SignUpModalStep2