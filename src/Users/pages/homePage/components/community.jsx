import React from "react";
import { FaComments, FaUsers, FaLightbulb, FaTrophy } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import bgImage from "../../../../assets/bg-image-3.jpg";

const Community = () => {
  return (
    <>
      <section
        className="padding-lr padding-tb bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className=" text-6xl font-bold font-italian text-center text-primary">
          Join Our Community
        </h2>
        <p className="text-lg mt-6 text-center max-w-3xl mx-auto">
          Become a part of a thriving community where members support and guide
          each other through their matchmaking journey.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8 mx-auto">
          <Motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 cursor-pointer"
          >
            <FaComments className="text-orange-600 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold text-primary py-2">
                Discussion Forums
              </h3>
              <p>
                Engage with like-minded individuals and get relationship advice.
              </p>
            </div>
          </Motion.div>

          <Motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 cursor-pointer"
          >
            <FaUsers className="text-orange-600 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold text-primary py-2">
                Exclusive Events
              </h3>
              <p>
                 Virtual and offline events to meet potential matches for premium members.
              </p>
            </div>
          </Motion.div>

          <Motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-5 cursor-pointer"
          >
            <FaLightbulb className="text-orange-600 text-5xl" />
            <div>
              <h3 className="text-2xl font-semibold text-primary py-2">
                Matchmaking Tips
              </h3>
              <p>
                Get expert advice on how to find and connect with your ideal
                partner.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default Community;
