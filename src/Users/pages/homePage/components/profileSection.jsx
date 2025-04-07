
import React from 'react'
import { motion as Motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ProfileSection = () => {
  return (
    <>
      <section className="relative bg-orange-600 text-white text-center padding-tb padding-lr">
      <Motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold font-italian"
      >
        Complete Your Profile
      </Motion.h1>
      <Motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-lg my-4"
      >
        Your profile is incomplete! Increase your chances of finding the perfect match.
      </Motion.p>
      <Motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-md mt-5 mb-9 max-w-2xl mx-auto"
      >
        Add details like your bio, preferences, and profile picture to start connecting with potential matches.
      </Motion.p>
      <div className='hover:transform hover:duration-300 hover:scale-110 hover:ease-in-out
'>
      <Link
        className=" my-6 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold shadow-lg "
        to='/create-profile'
      >
        Create Profile    
      </Link>
      </div>

    </section>
    </>
  )
}

export default ProfileSection