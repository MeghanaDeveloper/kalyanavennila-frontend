import React from 'react'
import { motion as Motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const PasswordSuccessModal = ({setStep}) => {
  return (
    <>
       <div className="text-center py-7">
         <div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
         >
           <Motion.div
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
             className="flex justify-center"
           >
             <FaCheckCircle className="text-green-500 text-7xl drop-shadow-md" />
           </Motion.div>
   
           <h2 className="text-3xl font-bold text-primary my-5">
           Password Created Successfully!
           </h2>
           <p>
           <span className='font-bold text-xl'>Thank you for registering with us. </span>
           <span className='block py-3'>Your account is now secured, and you can</span>proceed to <span className='text-primary font-bold'>Login</span> and continue using <span className='block pt-3 pb-9'> our services.</span>
           </p>
   
           <p
            className="text-primary text-xl font-bold  underline transition-effects"
             onClick={() => setStep(7)}
           >
             Go to Login Page
           </p>
         </div>
       </div>
    </>
  )
}

export default PasswordSuccessModal