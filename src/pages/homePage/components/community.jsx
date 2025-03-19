    import React from "react";
import { FaComments, FaUsers, FaLightbulb, FaTrophy } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import bgImage from '../../../assets/bg-image-3.jpg'

const Community = () => {
  return (
    <>
      <section className="relative bg-orange-600 text-white text-center padding-tb padding-lr">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" text-5xl md:text-6xl font-bold font-italian"
        >
          Find Your Perfect Match
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg my-4"
        >
          Connecting Hearts Across the Globe with trust and compatibility.
        </Motion.p>
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-md m-y2 max-w-2xl mx-auto"
        >
          Our platform uses AI-driven matchmaking and personalized recommendations to help you find the most compatible partner for a lifelong journey.
        </Motion.p>
        <Motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="my-6 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Get Started
        </Motion.button>
      </section>

      <section className="padding-lr padding-tb bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }} 
            >
        <h2 className=" text-5xl md:text-6xl font-bold font-italian text-center text-primary">Join Our Community</h2>
        <p className="text-lg text-gray-700 mt-4 text-center max-w-3xl mx-auto">
          Become a part of a thriving community where members support and guide each other through their matchmaking journey.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
          <Motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 cursor-pointer"
          >
            <FaComments className="text-orange-600 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold text-primary py-2">Discussion Forums</h3>
              <p className="text-gray-600">Engage with like-minded individuals and get relationship advice.</p>
            </div>
          </Motion.div>

          <Motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 cursor-pointer"
          >
            <FaUsers className="text-orange-600 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold text-primary py-2">Exclusive Events</h3>
              <p className="text-gray-600">Attend virtual and offline events to meet potential matches.</p>
            </div>
          </Motion.div>

          <Motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 cursor-pointer"
          >
            <FaLightbulb className="text-orange-600 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold text-primary py-2">Matchmaking Tips</h3>
              <p className="text-gray-600">Get expert advice on how to find and connect with your ideal partner.</p>
            </div>
          </Motion.div>

          <Motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 cursor-pointer"
          >
            <FaTrophy className="text-orange-600 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold text-primary py-2">Success Stories</h3>
              <p className="text-gray-600">Read real stories of couples who found love through our platform.</p>
            </div>
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default Community;
