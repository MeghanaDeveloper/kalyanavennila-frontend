
import {
  FaUserShield,
  FaStar,
  FaUser,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import bgImage from "../../../../assets/bg-image-6.jpg";

const ChooseUs = () => {
  return (
    <>
      <section className="relative bg-primary text-white flex justify-center items-center px-6 padding-tb">
        <div className="max-w-4xl w-full text-left">
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl text-center font-bold font-italian mb-6"
          >
            Find Your Match – Free to Join, Easy to Connect!
          </Motion.h1>

          <Motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl space-y-6 md:pl-32 list-none"
          >
            <li>
              ✔ Free Registration: Create your profile in minutes – absolutely
              free.
            </li>
            <li>
              ✔ Your Profile is Visible to All: Whether you're subscribed or
              not, your profile will be shown to potential matches once approved.
            </li>
             <li>
              ✔ With a premium subscription of Rs. 1000/- you can access your preferred profile contact details.
            </li>
            <li>✔ You Might Find a Match Even Without Paying!</li>
            <li>✔ Upgrade Anytime: Want more visibility and features?</li>
          </Motion.ul>
        </div>
      </section>

      <section
        className="padding-tb padding-lr bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="text-6xl font-bold text-center text-primary font-italian">
          Why Choose Us?
        </h2>

        <p className="text-lg text-gray-500 mt-4 text-center max-w-3xl mx-auto font-bold">
          Our platform is built for genuine connections, cultural compatibility,
          and secure matchmaking.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-8">
          <Motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-6 py-8 rounded-lg shadow-lg cursor-pointer"
          >
            <FaUserShield className="text-orange-600 text-5xl mx-auto" />
            <h3 className="text-xl font-bold text-center text-primary my-4">
              Secure & Trusted
            </h3>
            <p className=" text-center">
              We ensure privacy and verification Via Aadhar Card or Phone Number
            </p>
          </Motion.div>

          <Motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-6 py-8  rounded-lg shadow-lg cursor-pointer"
          >
            <FaUser className="text-orange-600 text-5xl mx-auto" />
            <h3 className="text-xl font-bold text-center text-primary my-4">
              Cultural Compatibility
            </h3>
            <p className=" text-center">
              Find partners who share your values, traditions, and beliefs.
            </p>
          </Motion.div>

          <Motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white px-6 py-8  rounded-lg shadow-lg cursor-pointer"
          >
            <FaStar className="text-orange-600 text-5xl mx-auto" />
            <h3 className="text-xl font-bold text-center text-primary my-4">
              Personalized Matches
            </h3>
            <p className=" text-center">
              Find your perfect partner.
            </p>
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
