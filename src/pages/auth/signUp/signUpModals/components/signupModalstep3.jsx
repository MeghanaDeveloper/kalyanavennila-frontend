import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaArrowLeftLong, FaCircleUser } from 'react-icons/fa6';
import { useAuthContextData } from '../../../../../context/AuthProvider';
import { signUp } from '../../../../../services/authAPI\'s';
import { FaSpinner } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { IoMdClose } from "react-icons/io";


const SignupModalstep3 = () => {
  const { setStep, formData, handleChange, setFormData, setIsSignUpOpen } = useAuthContextData();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signUp(formData);
      if (response.success) {
        setStep(4);
        setFormData({
          accountCreatedBy: '',
          gender: '',
          email: '',
          mobile: '',
          fullName: '',
          motherTongue: '',
          religion: ''
        });
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

      <div className='flex justify-between items-center pb-5'>
        <FaArrowLeftLong onClick={() => setStep(2)} className="text-primary text-xl transition-effects" />
        <IoMdClose
          onClick={() => [setIsSignUpOpen(false)]}
          className="  text-primary text-xl transition-effects">
        </IoMdClose>
      </div>


      <div className="flex justify-center items-center pb-3">
        <div className='rounded-full p-4 border-2 border-white bg-green-600/10'>
          <FaCircleUser className="text-green-600/40 text-3xl " />
        </div>
      </div>

      <form className="px-5 py-3" onSubmit={handleSubmit} method="POST">
        <div className='pb-9'>
          <label htmlFor="fullName" className="label-styles">
            Bride/Groom Full Name
          </label>
          <div className="mt-2">
            <input
              required
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              className="textbox-styles"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              disabled={loading}
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
                    type="text"
                    autoComplete="motherTongue"
                    className="textbox-styles"
                    value={formData.motherTongue}
                    onChange={handleChange}
                    placeholder="Mother Tongue"
                    required
                    disabled={loading}
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
                    type="text"
                    autoComplete="religion"
                    className="textbox-styles"
                    value={formData.religion}
                    onChange={handleChange}
                    placeholder="Religion"
                    required
                    disabled={loading}
                  />
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {formData.fullName && formData.motherTongue && formData.religion && (
            <Motion.button
              type="submit"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`button-styles flex justify-center items-center gap-2 ${loading ? "opacity-50 pointer-events-none" : ""}`}
              disabled={loading}
            >
              {loading && <FaSpinner className="animate-spin" />}
              Submit
            </Motion.button>

          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default SignupModalstep3;
