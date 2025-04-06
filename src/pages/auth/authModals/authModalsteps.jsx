import React from 'react';
import SignUpModalStep1 from '../signUp/signUpModals/components/signUpModalStep1';
import SignUpModalStep2 from '../signUp/signUpModals/components/signUpModalStep2';
import SignupModalstep3 from '../signUp/signUpModals/components/signupModalstep3';
import PasswordGeneration from '../password/PasswordGeneration';
import PasswordSuccessModal from '../password/passwordSuccessModal';
import SignUpSuccessModal from '../signUp/signUpSuccessModal';
import ForgotPassword from '../password/forgotPassword';
import LoginModal from '../login/loginModal';
import OTPVerification from '../otp/otpVerification';
import ResetPassword from '../password/resetPassword';
import useAuthContextData from '../../../hooks/useAuthContextData';

const AuthModalsteps = () => {
  const { step } = useAuthContextData();

  return (
    <div>
      {step === 1 && <SignUpModalStep1 />}
      {step === 2 && <SignUpModalStep2 />}
      {step === 3 && <SignupModalstep3 />}
      {step === 4 && <OTPVerification />}
      {step === 5 && <SignUpSuccessModal />}
      {step === 6 && <PasswordGeneration />}
      {step === 7 && <PasswordSuccessModal />}
      {step === 8 && <LoginModal />}
      {step === 9 && <ForgotPassword />}
      {step === 10 && <ResetPassword />}
    </div>
  );
};

export default AuthModalsteps;
