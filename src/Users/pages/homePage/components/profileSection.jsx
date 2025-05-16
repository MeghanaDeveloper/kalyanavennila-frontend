import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  return (
    <>
      <section className="relative bg-primary text-white text-center padding-tb padding-lr">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold font-italian"
        >
          Complete Your Profile to Find Your Perfect Match
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg my-6 max-w-2xl mx-auto"
        >
          A complete profile helps others know the real you — your values,
          lifestyle, and what you're looking for in a life partner.
        </Motion.p>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-md my-9 max-w-2xl mx-auto"
        >
          Adding your photo, background, and preferences shows that you're
          serious and respectful — it builds trust and increases your chances of
          genuine connections.
        </Motion.p>

        <div className="transition-effects">
          <Link
            to="/create-profile"
            className="my-6 font-bold text-lg  bg-white text-orange-600 px-6 py-3 rounded-full shadow-lg"
          >
            Complete My Profile
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProfileSection;
