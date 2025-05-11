import React from "react";
import { motion as Motion } from "framer-motion";

const ContactUs = () => {
  return (
    <>
      <section className="bg-[#FDF6F0] py-10">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-5xl font-italian font-bold text-primary text-center mb-6">
            Contact Us
          </h2>
          <p className="text-gray-700 text-center mb-10">
            Have questions? Need assistance? Reach out to us, and we’ll be happy
            to help!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-8">
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <span className="text-3xl text-primary">📞</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 8331085410</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl text-primary">📧</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">info@kalyanavennila.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl text-primary">📍</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600">1205 Aspira Apartments, J.P.Nagar, Banglore,
                  <span className="block">Karnataka - 560078</span></p>
                </div>
              </div>
            </div>

            <form className="space-y-4 pb-6">
              <div>
                <label className="label-styles">Your Name</label>
                <input
                  type="text"
                  className="textbox-styles"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="label-styles">Your Email</label>
                <input
                  type="email"
                  className="textbox-styles"
                  placeholder="Enter your email"
                />
              </div>
              <div className="pb-5">
                <label className="label-styles">Message</label>
                <textarea
                  className="textbox-styles"
                  placeholder="Write your message..."
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="button-styles">
                Send Message
              </button>
            </form>
          </div>
        </Motion.div>
      </section>
    </>
  );
};

export default ContactUs;
