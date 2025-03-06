
import React, { createContext, useContext } from 'react'
import { useDispatch } from 'react-redux';


const AuthContext = createContext();

export const useAuthContextData = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()

  return (
    <>
      <AuthContext.Provider value={{

      }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider