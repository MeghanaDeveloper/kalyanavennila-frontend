import React from "react";
import aboutImage from "../../../assets/about-image.webp";
import missionImage from "../../../assets/vission.webp";
import bgAbout from "../../../assets/bg-about.jpg";
import valueImage from "../../../assets/value-image.webp";
import { motion as Motion } from "framer-motion";
import ContactUs from "../contact/contactUs";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo1.jpg'

const AboutPage = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 text-center text-white"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold"></h1>
          <p className="mt-4 text-lg">
            Helping you find your perfect life partner with trust, tradition,
            and technology.
          </p>
        </div>
      </section>

      <section className="bg-[#FFF8F2] py-10 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="bg-white rounded-lg p-10 shadow-lg flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <div className="text-left">
              <h2 className="text-5xl font-italian font-bold text-primary mb-4">About Us</h2>
              <p className="text-gray-600 text-lg">
                We come from a family deeply rooted in Tamil culture and values.
                Our journey started in Mayiladuthurai, Tamil Nadu, and expanded
                to Chennai and Hyderabad. At Kalyana Vennila, we believe that
                marriage is not just about two individuals but about two
                families coming together in love and harmony.
              </p>
            </div>
          </div>
        </Motion.div>
      </section>

      <section className="bg-[#FFF8F2] py-10 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="bg-white rounded-lg p-10 shadow-lg flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={valueImage}
              alt="About Us"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <div className="text-left">
              <h2 className="text-5xl font-bold font-italian  text-primary mb-4">
                Our Value
              </h2>
              <p className="text-gray-600 text-lg">
                My great grandfather Narayanaswamy Iyer and grandfather
                Ramachandran Iyer who led a very austere life, always believed
                and stressed while we are progressing as a society and accepting
                scientific development, we should not lose our traditional and
                moral values which are deep rooted in our social system.
              </p>
            </div>
          </div>
        </Motion.div>
      </section>

      <section className="bg-[#F9F9F9] py-10 text-center">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="bg-white rounded-lg p-10 shadow-lg flex flex-col md:flex-row-reverse items-start space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={missionImage}
              alt="Mission & Vision"
              className="w-80 h-80 object-cover rounded-lg"
            />
            <div className="text-left">
              <h2 className="text-5xl font-italian font-bold text-primary mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 text-lg">
                Our mission is to create a **safe, genuine, and user-friendly**
                platform for individuals seeking meaningful relationships. We
                ensure **verified profiles and privacy
                protection** to provide a seamless experience.
              </p>
            </div>
          </div>
        </Motion.div>
      </section>

      <section className="bg-[#F9F9F9] pt-10 pb-20  text-center">
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="bg-white rounded-lg p-10 pb-16 shadow-lg flex flex-col space-y-6 md:space-y-0 md:space-x-8">
          <h2 className="text-6xl font-italian font-bold text-primary py-3">
            Find Your Life Partner with Us!
          </h2>
          <p className="my-4 font-bold text-xl text-gray-700">
            Join the most **trusted matchmaking platform** and start your
            journey today.
          </p>
          <p className="my-2 pb-7 font-bold text-xl text-gray-600">
            We help you find a match based on
            **values, compatibility, and trust**.
          </p>
          <Link to='/' className="button-styles bg-green-700 text-2xl">Register Now For Free</Link>
          </div>
        </Motion.div>
      </section>

      <section className="bg-[#FDF6F0] py-10 text-center">
        <Motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-5xl font-italian font-bold text-primary mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 shadow-lg cursor-pointer rounded-lg transition-all"
            >
              <span className="text-4xl text-primary">📋</span>
              <h3 className="text-xl font-bold text-primary my-4">
                1. Create Your Profile
              </h3>
              <p className="text-gray-600 my-2">
                Sign up and share your profile for Free, to connect with
                whom you want as a lifetime partner.
              </p>
            </Motion.div>

            <Motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 shadow-lg cursor-pointer rounded-lg transition-all"
            >
              <div className="flex justify-center items-center">
              <img src={logo} width='40' height='40' className="rounded-full"/>
              </div>

              <h3 className="text-xl font-bold text-primary my-4">
                2. Find Your Compatible Match
              </h3>
              <p className="text-gray-600 my-2">
                  With small subscription of Rs.1000 access your preferred contact numbers, unlimited for 3 months.
              </p>
            </Motion.div>

            <Motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 shadow-lg cursor-pointer rounded-lg transition-all"
            >
              <span className="text-4xl text-primary">💬</span>
              <h3 className="text-xl font-bold text-primary my-4">
                3. Connect & Communicate
              </h3>
              <p className="text-gray-600 my-2">
                Chat securely with your matches, build a connection, and take
                the **next step towards a happy marriage**.
              </p>
            </Motion.div>
          </div>
        </Motion.div>
      </section>

      <ContactUs />
    </>
  );
};

export default AboutPage;
