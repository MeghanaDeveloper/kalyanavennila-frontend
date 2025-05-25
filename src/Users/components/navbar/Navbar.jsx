import { useState } from "react";
import LoginModal from "../../pages/auth/login/loginModal";
import AuthModalLayout from "../layouts/modalLayouts/authModalLayout";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuthContextData from "../../hooks/useAuthContextData";
import logo from "../../../assets/logo1.jpg";

const Navbar = () => {
  const {
    isLoginOpen,
    setIsLoginOpen,
    isSignUpOpen,
    setIsSignUpOpen,
    setStep,
  } = useAuthContextData();

  const [isOpen, setIsOpen] = useState(null);

  const { isAuthenticated, userData } = useSelector(
    (state) => state.authReducer
  );

  const dispatch = useDispatch();
  return (
    <>
      <nav className="padding-lr bg-primary p-4 shadow-md fixed top-0 left-0 w-full text-white z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex justify-center items-center gap-3">
            <img src={logo} alt="logo" className="w-11 h-11 rounded-3xl" />
            <span className="text-2xl font-bold cursor-pointer">
              Kalyana Vennila
            </span>
          </Link>
      
          <div className="hidden lg:flex items-center space-x-3.5 font-medium">
            {!isAuthenticated ? (
              <>
                <p
                  onClick={() => [setIsSignUpOpen(true), setStep(1)]}
                  className="hover:text-gray-300 border border-white rounded-lg cursor-pointer shadow-2xl px-3 py-1.5 transition-effects"
                >
                  Register For Free
                </p>
                <p
                  onClick={() => [setIsLoginOpen(true), setStep(8)]}
                  className="hover:text-gray-300 border border-white rounded-lg cursor-pointer px-3 py-1.5 transition-effects"
                >
                  Login
                </p>
                <Link
                  to="/about"
                  className="hover:text-gray-300 border border-white rounded-lg cursor-pointer px-3 py-1.5 transition-effects"
                >
                  About Us
                </Link>
                <Link
                  to="/blogs"
                  className="hover:text-gray-300 border border-white rounded-lg cursor-pointer px-3 py-1.5 transition-effects"
                >
                  Our Blogs
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
                <Link to="/create-profile" className="hover:text-gray-300">
                  Create Profile
                </Link>
                <Link to="/find-your-match" className="hover:text-gray-300">
                  Find Your Match
                </Link>
                <Link to="/blogs" className="hover:text-gray-300">
                  Our Blogs
                </Link>
                <Link to="/contact-us" className="hover:text-gray-300">
                  Contact Us
                </Link>

                <div className="relative">
                  <button
                    className="flex items-center gap-2 hover:text-gray-300"
                    onClick={() =>
                      setIsOpen(isOpen === "dropdown" ? null : "dropdown")
                    }
                  >
                    <p className="text-lg cursor-pointer">
                      {userData.firstName}
                    </p>
                    <FaChevronDown className="text-sm" />
                  </button>

                  {isOpen === "dropdown" && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg">
                      <Link
                        to="/profile"
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer block px-4 py-2 hover:bg-gray-100"
                      >
                        View Profile
                      </Link>
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

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(isOpen === "mobile" ? null : "mobile")}
          >
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </button>
        </div>

        {isOpen === "mobile" && (
          <div className="lg:hidden flex flex-col bg-[#F7641E] px-9 py-6 font-bold space-y-4">
            {!isAuthenticated ? (
              <>
                <p
                  onClick={() => [
                    setIsSignUpOpen(true),
                    setStep(1),
                    setIsOpen(null),
                  ]}
                  className="rounded-lg cursor-pointer shadow-2xl px-3 py-1.5 transition"
                >
                  Sign Up
                </p>
                <p
                  onClick={() => [
                    setIsLoginOpen(true),
                    setStep(8),
                    setIsOpen(null),
                  ]}
                  className="hover:text-gray-300 rounded-lg cursor-pointer px-3 py-1.5 transition-effects"
                >
                  Login
                </p>
                <Link
                 to='/about'
                  className="hover:text-gray-300 rounded-lg cursor-pointer px-3 py-1.5 transition"
                >
                  About Us
                </Link>
                <Link
                  to='/blogs'
                  className="hover:text-gray-300 rounded-lg cursor-pointer px-3 py-1.5 transition"
                >
                  Our Blogs
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(null)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(null)}
                >
                  About Us
                </Link>
                <Link
                  to="/create-profile"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(null)}
                >
                  Create Profile
                </Link>
                <Link
                  to="/find-your-match"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(null)}
                >
                  Find Your Match
                </Link>
                <Link
                  to="/profile"
                  className="hover:text-gray-300"
                  onClick={() => setIsOpen(null)}
                >
                  View Profile
                </Link>
                <p
                  onClick={() => {
                    dispatch(logout());
                    setIsOpen(null);
                  }}
                  className="hover:text-gray-300 rounded-lg cursor-pointer transition"
                >
                  Logout
                </p>
              </>
            )}
          </div>
        )}
      </nav>

      {isSignUpOpen && <AuthModalLayout />}
      {isLoginOpen && <LoginModal />}
    </>
  );
};

export default Navbar;
