
import React, { createContext, useContext, useState } from 'react'
import { signUp } from '../services/authAPI\'s';
//import { useDispatch } from 'react-redux';


const AuthContext = createContext();

export const useAuthContextData = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [formData, setFormData] = useState({
    accountCreatedBy: '',
    gender: '',
    email: '',
    mobile: '',
    fullName: '',
    motherTongue: '',
    religion: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await signUp(formData);
    if (response.success) {
      setStep(4)
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
  }

  return (
    <>
      <AuthContext.Provider value={{
        step, setStep, isSignUpOpen, setIsSignUpOpen, isLoginOpen, setIsLoginOpen, formData, setFormData, handleChange, handleSubmit

      }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider