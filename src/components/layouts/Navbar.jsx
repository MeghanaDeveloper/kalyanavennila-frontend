import { useState } from "react";
import LoginModal from "../../pages/auth/login/loginModal";
import { useAuthContextData } from "../../context/AuthProvider";
import AuthModalLayout from "./authModalLayout";


const Navbar = () => {
  const {isLoginOpen, setIsLoginOpen, isSignUpOpen, setIsSignUpOpen, setStep} = useAuthContextData()
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <nav className="padding-lr bg-primary p-4 shadow-md fixed top-0 left-0 w-full text-white z-50">
        <div className="container   mx-auto flex justify-between items-center">
          <a href='/' className=" text-2xl font-bold cursor-pointer">Kalyana Vennila</a>

          <div className="hidden md:flex items-center space-x-6  font-medium">
            {/* <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Find Your Match</a>
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a> */}
            <p onClick={() => [setIsSignUpOpen(true), setStep(1)]} className=" border border-white rounded-lg cursor-pointer shadow-2xl px-3 py-1.5 transition-effects">Sign Up</p>
            <p onClick={() => [setIsLoginOpen(true), setStep(8)]} className="hover:text-gray-300 border border-white rounded-lg cursor-pointer px-3 py-1.5 transition-effects">Login</p>
            {/* <img
              alt="Profile"
              src="https://via.placeholder.com/40"
              className="size-7 rounded-full ring-2 ring-white"
            /> */}
          </div>

          <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col bg-[#F7641E]  p-4 space-y-3">
            {/* <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Find Your Match</a>
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a> */}
            <p onClick={() => [setIsSignUpOpen(true), setStep(1)]} className=" rounded-lg cursor-pointer shadow-2xl px-3 py-1.5 transition-effects">Sign Up</p>
            <p onClick={() =>[setIsLoginOpen(true), setStep(8)]} className="hover:text-gray-300 rounded-lg cursor-pointer px-3 py-1.5 transition-effects">Login</p>
          </div>
        )}
      </nav>
 
      {/* Sign Up Modal */}
      {
        isSignUpOpen &&
        <AuthModalLayout  />
      }

      {/* Login Modal */}
      {
        isLoginOpen &&
        <LoginModal  />
      }
    </>
  );
};

export default Navbar;