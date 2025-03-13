import React, {  useState } from 'react'
import { IoLogInOutline } from "react-icons/io5";
import { FaEye , FaEyeSlash} from "react-icons/fa";
import { useAuthContextData } from '../../../context/AuthProvider';
import { loginData } from '../../../services/authAPI\'s';
import { useNavigate } from "react-router-dom";


const LoginModal = () => {
  const { setStep, setIsSignUpOpen, setIsLoginOpen} = useAuthContextData()

  const navigate = useNavigate()

  const [accountId, setAccountId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(accountId,password)
       const response = await loginData(accountId,password);
          if (response.success) {
            setIsLoginOpen(false)
            navigate('/profile')
            setAccountId("")
            setPassword("")
          }
  }
  return (
    <>
      <div className="fixed inset-0  bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 py-5">
        <div className="bg-white p-6 rounded-lg shadow-xl  w-[85%] sm:w-[45%] md:w-[40%] lg:w-[35%] xl:w-[30%] max-h-[85vh] overflow-y-scroll scrollbar-hide relative transition-all duration-300 ease-in-out">

        <p
      onClick={() => setIsLoginOpen(false)}
      className="absolute top-5 right-5  text-primary text-lg font-bold  underline transition-effects">
      GoBack
    </p>

          <div className="flex justify-center items-center pt-10">
            <div className='rounded-full p-4 border-white border-2 bg-primary/20'>
              <IoLogInOutline className="text-primary/70 text-3xl " />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary text-center py-2">Please Login !!</h2>

          <form className="px-5 py-3 relative">
            <div className='pb-5'>
              <label htmlFor="accountId" className="label-styles">
                Account Id
              </label>
              <div className="mt-2">
                <input
                  required
                  id="accountId"
                  name="accountId"
                  type="accountId"
                  autoComplete="accountId"
                  className="textbox-styles"
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  placeholder="Account Id"
                />
              </div>
            </div>

            <div className='pb-12'>
              <label htmlFor="password" className="label-styles">
                 Password
              </label>
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
                />
                <span
                  className="absolute top-3 right-3 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <p onClick={ () => [setIsLoginOpen(false), setIsSignUpOpen(true), setStep(9)]} 
            className="absolute right-5 top-[210px] text-primary text-md font-bold  underline transition-effects">Forgot Password ?</p>

            <div className='mt-6 mb-3'>
              <button type='submit' className='button-styles' onClick={handleSubmit} >Submit</button>
            </div>
          </form>

          <h2 className="text-lg pl-2 font-bold  underline">Note:</h2>

          <ol className='pl-9 py-2 list-decimal'>
            <li className='py-2' >if your login is success, we will redirect to profile page</li>
            <li className='py-2' > Don't  have an account?{'  '}Go to SignUp Page{'  '}-{'  '}<span onClick={() => [setIsLoginOpen(false), setIsSignUpOpen(true)]} className="text-primary text-md font-bold  underline transition-effects">Sign Up</span></li>
            <li className='py-2' >if you have registered but not generated go to password generation page{'  '}-{'  '} <span onClick={() => [setIsLoginOpen(false), setIsSignUpOpen(true), setStep(5)]} className="text-primary text-md font-bold  underline transition-effects">Password Generation Page</span></li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default LoginModal