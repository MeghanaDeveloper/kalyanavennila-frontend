import React from 'react';
import SignUpModalStep1 from './signUpModals/components/signUpModalStep1';
import SignUpModalStep2 from './signUpModals/components/signUpModalStep2';
import SignupModalstep3 from './signUpModals/components/signupModalstep3';
import PasswordGeneration from '../password/PasswordGeneration';
import PasswordSuccessModal from '../password/passwordSuccessModal';
import SignUpSuccessModal from './signUpSuccessModal';
import ForgotPassword from '../password/forgotPassword';
import LoginModal from '../login/loginModal';
import { useAuthContextData } from '../../../context/AuthProvider';

const SignUpModalsteps = () => {
  const { step } = useAuthContextData();

  return (
    <div>
      {step === 1 && <SignUpModalStep1 />}
      {step === 2 && <SignUpModalStep2 />}
      {step === 3 && <SignupModalstep3 />}
      {step === 4 && <SignUpSuccessModal />}
      {step === 5 && <PasswordGeneration />}
      {step === 6 && <PasswordSuccessModal />}
      {step === 7 && <LoginModal />}
      {step === 8 && <ForgotPassword />}
    </div>
  );
};

export default SignUpModalsteps;
