import React from 'react'
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowLeftLong, FaCircleUser } from 'react-icons/fa6';
import { useAuthContextData } from '../../../../../context/AuthProvider';


const SignupModalstep3 = () => { 
  const {setStep, formData,  handleChange, handleSubmit } = useAuthContextData()

  return (
    <>
    <FaArrowLeftLong onClick={() => setStep(2)} className="text-primary text-4xl transition-effects" />

    <div className="flex justify-center items-center pb-3">
      <div className='rounded-full p-4 border-2 border-white bg-green-600/10'>
        <FaCircleUser className="text-green-600/40 text-3xl " />
      </div>
    </div>

    <form className="px-5 py-3">
        <div className='pb-9'>
          <label htmlFor="fullName" className="label-styles">
            Bride/Groom Full Name
          </label>
          <div className="mt-2">
            <input
            required
              id="fullName"
              name="fullName"
              type="fullName"
              autoComplete="name"
              className="textbox-styles"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
        </div>

        <AnimatePresence>
          {formData.fullName && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className='pb-9'>
                <label htmlFor="motherTongue" className="label-styles">
                  Mother Tongue
                </label>
                <div className="mt-2">
                  <input
                    id="motherTongue"
                    name="motherTongue"
                    type="motherTongue"
                    autoComplete="motherTongue"
                    className="textbox-styles"
                    value={formData.motherTongue}
                    onChange={handleChange}
                    placeholder="Mother Tongue"
                    required
                  />
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {formData.motherTongue && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className='pb-9'>
                <label htmlFor="religion" className="label-styles">
                  Religion
                </label>
                <div className="mt-2">
                  <input
                    id="religion"
                    name="religion"
                    type="religion"
                    autoComplete="religion"
                    className="textbox-styles"
                    value={formData.religion}
                    onChange={handleChange}
                    placeholder="Religion"
                    required
                  />
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

      <AnimatePresence>
        {formData.fullName && formData.motherTongue && formData.religion && (
          <Motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="button-styles "
            onClick={handleSubmit}
          >
            Submit
          </Motion.button>
        )}
      </AnimatePresence>
    </form>
  </>
  )
}

export default SignupModalstep3