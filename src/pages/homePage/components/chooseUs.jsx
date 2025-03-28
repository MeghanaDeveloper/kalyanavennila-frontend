    import React from "react";
import { FaUsers, FaHeart, FaUserShield, FaStar, FaTrophy, FaLightbulb } from "react-icons/fa";
import { motion as Motion} from "framer-motion";
import bgImage from "../../../assets/bg-image-6.webp";

const ChooseUs = () => {
  return (
    <>
      <section className="relative bg-orange-600 text-white text-center padding-tb padding-lr">
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" text-4xl md:text-6xl font-bold font-italian"
        >
          Your Journey to Love Begins Here
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg mt-4 max-w-2xl mx-auto"
        >
          Discover meaningful connections and start a new chapter in your life with a community that values trust, culture, and compatibility.
        </Motion.p>

        <Motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Join Now - It’s Free!
        </Motion.button>
      </section>

      <section className="padding-tb padding-lr bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>

        <h2 className=" text-4xl md:text-6xl font-bold text-center text-primary font-italian">Why Choose Us?</h2>

        <p className="text-lg text-gray-500 mt-4 text-center max-w-3xl mx-auto">
          Our platform is built for genuine connections, cultural compatibility, and secure matchmaking.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-8">
          <Motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }} className="bg-white px-6 py-8 rounded-lg shadow-lg cursor-pointer">
            <FaUserShield className="text-orange-600 text-5xl mx-auto" />
            <h3 className="text-xl font-bold text-center text-primary my-4">Secure & Trusted</h3>
            <p className="text-gray-600 text-center">We ensure privacy and verification Via Aadhar Card or Phone Number</p>
          </Motion.div> 

          <Motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }} className="bg-white px-6 py-8  rounded-lg shadow-lg cursor-pointer">
            <FaHeart className="text-orange-600 text-5xl mx-auto" />
            <h3 className="text-xl font-bold text-center text-primary my-4">Cultural Compatibility</h3>
            <p className="text-gray-600 text-center">Find partners who share your values, traditions, and beliefs.</p>
          </Motion.div>

          <Motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="bg-white px-6 py-8  rounded-lg shadow-lg cursor-pointer">
            <FaStar className="text-orange-600 text-5xl mx-auto" />
            <h3 className="text-xl font-bold text-center text-primary my-4">Personalized Matches</h3>
            <p className="text-gray-600 text-center">Find your perfect partner.</p>
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
