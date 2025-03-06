import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowLeftLong, FaCircleUser } from 'react-icons/fa6';


const SignupModalstep3 = ({setStep}) => { 
    const [name, setname] = useState(0)
    const [mothertongue, setmothertongue] = useState(false)
    const [religion, setreligion] = useState(false)
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
          <label htmlFor="name" className="label-styles">
            Bride/Groom Full Name
          </label>
          <div className="mt-2">
            <input
            required
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              className="textbox-styles"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Full Name"
            />
          </div>
        </div>

        <AnimatePresence>
          {name && (
            <Motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className='pb-9'>
                <label htmlFor="mt" className="label-styles">
                  Mother Tongue
                </label>
                <div className="mt-2">
                  <input
                    id="mt"
                    name="mt"
                    type="mt"
                    autoComplete="mt"
                    className="textbox-styles"
                    value={mothertongue}
                    onChange={(e) => setmothertongue(e.target.value)}
                    placeholder="Mother Tongue"
                    required
                  />
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mothertongue && (
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
                    value={religion}
                    onChange={(e) => setreligion(e.target.value)}
                    placeholder="Religion"
                    required
                  />
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

      <AnimatePresence>
        {religion && (
          <Motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="button-styles "
            onClick={() => setStep(4)}
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