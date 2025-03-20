import { useState } from "react";
import LoginModal from "../../pages/auth/login/loginModal";
import { useAuthContextData } from "../../context/AuthProvider";
import AuthModalLayout from "./authModalLayout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const {isLoginOpen, setIsLoginOpen, isSignUpOpen, setIsSignUpOpen, setStep} = useAuthContextData()

  const [isOpen, setIsOpen] = useState(null);

  const { isAuthenticated , userData} = useSelector(state => state.authReducer);

  const dispatch = useDispatch()
  return (
    <>
      <nav className="padding-lr bg-primary p-4 shadow-md fixed top-0 left-0 w-full text-white z-50">
        <div className="container   mx-auto flex justify-between items-center">
          <a href='/' className=" text-2xl font-bold cursor-pointer">Kalyana Vennila</a>

          <div className="hidden md:flex items-center space-x-6  font-medium">
            {/* <img
              alt="Profile"
              src="https://via.placeholder.com/40"
              className="size-7 rounded-full ring-2 ring-white"
            /> */}
            {!isAuthenticated ? (
              <>
                <p onClick={() => [setIsSignUpOpen(true), setStep(1)]} 
                   className="hover:text-gray-300 border border-white rounded-lg cursor-pointer shadow-2xl px-3 py-1.5 transition-effects">Sign Up</p>
                <p onClick={() => [setIsLoginOpen(true), setStep(8)]} 
                   className="hover:text-gray-300 border border-white rounded-lg cursor-pointer px-3 py-1.5 transition-effects">Login</p>
              </>
            ) : (
              <>
              <a href="/home" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Find Your Match</a>
              <a href="/about" className="hover:text-gray-300">About Us</a>
              <div className="relative">
                  <button
                    className="flex items-center gap-2 hover:text-gray-300"
                    onClick={() => setIsOpen(isOpen === "dropdown" ? null : "dropdown")}
                  >
                    <p>{userData.firstName}</p>
                    <FaChevronDown className="text-sm" />
                  </button>

                  {isOpen === "dropdown" && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg">
                      <a href="/profile" className="cursor-pointer block px-4 py-2 hover:bg-gray-100">View Profile</a>
                      <p 
                        onClick={() => {
                          setIsOpen(null); 
                          dispatch(logout());
                        }} 
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Logout
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(isOpen === "mobile" ? null : "mobile")}>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>

        {isOpen === "mobile" && (
          <div className="md:hidden flex flex-col bg-[#F7641E] p-4 space-y-3">
            {!isAuthenticated ? (
              <>
                <p onClick={() => [setIsSignUpOpen(true), setStep(1)]} 
                   className="rounded-lg cursor-pointer shadow-2xl px-3 py-1.5 transition">Sign Up</p>
                <p onClick={() => [setIsLoginOpen(true), setStep(8)]} 
                   className="hover:text-gray-300 rounded-lg cursor-pointer px-3 py-1.5 transition">Login</p>
              </>
            ) : (
              <>
                <a href="/home" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">Find Your Match</a>
                <a href="/about" className="hover:text-gray-300">About Us</a>
                <a href="/profile" className="hover:text-gray-300">View Profile</a>
                <p 
                  onClick={() => dispatch(logout())} 
                  className="hover:text-gray-300 rounded-lg cursor-pointer transition">
                  Logout
                </p>
              </>
            )}
          </div>
        )}
      </nav>

      {
        isSignUpOpen &&
        <AuthModalLayout  />
      }

      {
        isLoginOpen &&
        <LoginModal  />
      }
    </>
  );
};

export default Navbar;