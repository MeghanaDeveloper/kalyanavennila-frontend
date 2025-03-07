
import React, { createContext, useContext, useState } from 'react'
//import { useDispatch } from 'react-redux';


const AuthContext = createContext();

export const useAuthContextData = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  //const dispatch = useDispatch()
  const [step, setStep] = useState(1); 
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{ step, setStep, isSignUpOpen, setIsSignUpOpen, isLoginOpen, setIsLoginOpen}}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider