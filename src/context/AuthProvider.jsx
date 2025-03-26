
import React, { createContext, useContext, useState } from 'react'


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
    surName: '',
    firstName: '',
    lastName: '',
    motherTongue: '',
    religion: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  return (
    <>
      <AuthContext.Provider value={{
        step, setStep, isSignUpOpen, setIsSignUpOpen, isLoginOpen, setIsLoginOpen, formData, setFormData, handleChange

      }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider