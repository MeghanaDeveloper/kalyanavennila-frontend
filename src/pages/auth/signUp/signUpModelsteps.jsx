import React from 'react'
import SignUpModalStep1 from './signUpModals/components/signUpModalStep1';
import SignUpModalStep2 from './signUpModals/components/signUpModalStep2';
import SignupModalstep3 from './signUpModals/components/signupModalstep3';
import PasswordGeneration from '../password/PasswordGeneration';
import PasswordSuccessModal from '../password/passwordSuccessModal';
import SignUpSuccessModal from './signUpSuccessModal';
import ForgotPassword from '../password/forgotPassword';
import LoginModal from '../login/loginModal';


const SignUpModalsteps = ({ step, setStep, setIsSignUpOpen }) => {
console.log('first', step)
  return (
    <>
      {
        step === 1 &&
        (
          <SignUpModalStep1  setStep={setStep} setIsSignUpOpen={setIsSignUpOpen} />
        )
      }

      {
        step === 2 &&
        (
          <SignUpModalStep2 setStep={setStep} />
        )
      }

      {
        step === 3 &&
        (
          <SignupModalstep3 setStep={setStep} />
        )
      }

      {
        step === 4 &&
        (
          <SignUpSuccessModal setStep={setStep} />
        )
      }

      {
        step === 5 &&
        (
          <PasswordGeneration setStep={setStep}  />
        )
      }

      {
        step === 6 &&
        (
          <PasswordSuccessModal setStep={setStep} />
        )
      }

{
        step === 7 &&
        (
          <LoginModal setStep={setStep} />
        )
      }

{/* {
        step === 8 &&
        (
          <ForgotPassword />
        )
      } */}
    </>
  )
}

export default SignUpModalsteps