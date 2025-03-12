import React, { useState } from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaEye } from "react-icons/fa";
import SignUpModalLayout from '../signUp/signUpModalLayout';
import PasswordGeneration from '../password/PasswordGeneration';
import { useAuthContextData } from '../../../context/AuthProvider';

const ForgotPassword = () => {
  const { setStep,   setIsSignUpOpen } = useAuthContextData()

  const [accountId, setaccountId] = useState(0)
  const [email, setemail] = useState(false)

  return (
    <>
      <p
        onClick={() => setIsSignUpOpen(false)}
        className="absolute top-5 right-5  text-primary text-lg font-bold  underline transition-effects">
        Close
      </p>

      <div className="flex justify-center items-center pt-10">
        <div className='rounded-full p-4 border-white border-2 bg-red-700/20'>
          <RiLockPasswordFill className="text-red-700/70 text-3xl " />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary text-center py-2">Forgot Password</h2>

      <form className="px-5 py-3 relative">
        <div className='pb-5'>
          <label htmlFor="accountId" className="label-styles">
            Account Id
          </label>
          <div className="mt-2">
            <input
              required
              id="accountId"
              name="accountId"
              type="accountId"
              autoComplete="accountId"
              className="textbox-styles"
              value={accountId}
              onChange={(e) => setaccountId(e.target.value)}
              placeholder="Account Id"
            />
          </div>
        </div>

        <div className='pb-12'>
          <label htmlFor="email" className="label-styles">
            Email
          </label>
          <div className="mt-1 relative">
            <input
              id="email"
              name="email"
              type='email'
              className="textbox-styles pr-10"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
        </div>

        <div className='mt-6 mb-3'>
          <button  onClick={() => setStep(6)} className='button-styles'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default ForgotPassword