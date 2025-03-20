import React, { useState } from 'react'
import { IoLogInOutline } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuthContextData } from '../../../context/AuthProvider';
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"; 
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { loginData } from '../../../services/authAPI\'s';


const LoginModal = () => {
  const { setStep, setIsSignUpOpen, setIsLoginOpen } = useAuthContextData();

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await dispatch(loginData(accountId, password));
      console.log("Login Response:", response);
      if (response.success) {
        setIsLoginOpen(false);
        navigate('/home');
        setAccountId("");
        setPassword("");
      }
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 py-5">
        <div className="bg-white p-6 rounded-lg shadow-xl w-[85%] sm:w-[47%] md:w-[42%] lg:w-[35%] xl:w-[30%] max-h-[85vh] overflow-y-scroll scrollbar-hide relative transition-all duration-300 ease-in-out">
        
          {loading && (
            <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10">
              <FaSpinner className="text-primary animate-spin text-4xl" />
            </div>
          )}

          <IoMdClose
            onClick={() => setIsLoginOpen(false)}
            className={`absolute top-5 right-5 text-primary text-lg transition-effects ${loading ? "opacity-50 pointer-events-none" : ""}`}
          >  
          </IoMdClose>

          <div className="flex justify-center items-center pt-10">
            <div className={`rounded-full p-4 border-white border-2 bg-primary/20 ${loading ? "opacity-50" : ""}`}>
              <IoLogInOutline className="text-primary/70 text-3xl" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary text-center py-2">Please Login !!</h2>

          <form className="px-5 py-3 relative" onSubmit={handleSubmit} method="POST">
            <div className='pb-5'>
              <label htmlFor="accountId" className="label-styles">Account Id</label>
              <div className="mt-2">
                <input
                  required
                  id="accountId"
                  name="accountId"
                  type="text"
                  autoComplete="off"
                  className="textbox-styles"
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  placeholder="Account Id"
                  disabled={loading}
                />
              </div>
            </div>

            <div className='pb-12'>
              <label htmlFor="password" className="label-styles">Password</label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"} 
                  className="textbox-styles pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  required
                  disabled={loading}
                />
                <span
                  className={`absolute top-3 right-3 cursor-pointer text-gray-600 ${loading ? "opacity-50 pointer-events-none" : ""}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <p
              onClick={() => [setIsLoginOpen(false), setIsSignUpOpen(true), setStep(9)]}
              className={`absolute right-5 top-[210px] text-primary text-md font-bold underline transition-effects ${loading ? "opacity-50 pointer-events-none" : ""}`}
            >
              Forgot Password?
            </p>

            <div className="mt-6 mb-3">
              <button
                type="submit"
                className={`button-styles flex justify-center items-center gap-2 ${loading ? "opacity-50 pointer-events-none" : ""}`}
                disabled={loading}
              >
                {loading && <FaSpinner className="animate-spin" />}
                Submit
              </button>
            </div>
          </form>

          <h2 className="text-lg pl-2 font-bold underline">Note:</h2>
          <ol className="pl-9 py-2 list-decimal">
            <li className="py-1">If your login is successful, we will redirect you to the profile page.</li>
            <li className="py-1">
              Don't have an account?{" "}
              <span onClick={() => [setIsLoginOpen(false), setIsSignUpOpen(true),setStep(1)]} className="text-primary text-md font-bold underline transition-effects">
                Sign Up
              </span>
            </li>
            <li className="py-1">
              If you have registered but not generated a password, go to the password generation page -{" "}
              <span onClick={() => [setIsLoginOpen(false), setIsSignUpOpen(true), setStep(6)]} className="text-primary text-md font-bold underline transition-effects">
                Password Generation Page
              </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
