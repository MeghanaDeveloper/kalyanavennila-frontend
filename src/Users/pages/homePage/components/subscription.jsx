import React from "react";
import marriage from "../../../../assets/marriage.jpg";
import { motion as Motion } from "framer-motion";

const Subscription = () => {
  return (
    <>
      <section className="relative bg-primary text-white text-center padding-tb padding-lr">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white rounded-lg p-10 shadow-lg flex flex-col md:flex-row items-start gap-6 md:gap-16">
            <img
              src={marriage}
              alt="Subscription Offer"
              className="w-75 h-75 object-cover rounded-lg"
            />

            <div className="text-left flex-1">
              <h2 className="text-5xl md:text-5xl font-bold text-primary mb-4 font-italian">
                🔓 Unlock Unlimited Profiles
              </h2>
              <p className="text-gray-700 text-xl mb-4">
                With {" "}
                <strong className="text-primary">one subscription</strong>, you
                get full access to browse{" "}
                <strong className="text-primary">
                  unlimited profiles for 3 months.
                </strong>{" "}
                Find your perfect match faster with unlimited search and contact
                options.
              </p>
              <p className="text-gray-700 text-xl mb-6">
                Meet genuine, verified individuals who share your values. Your
                journey to meaningful connections starts now!
              </p>
            </div>
          </div>
        </Motion.div>
      </section>
    </>
  );
};

export default Subscription;
