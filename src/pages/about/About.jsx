import React from "react";
import aboutImage from '../../assets/about-image.png';
import success1 from '../../assets/success-1.jpeg';
import success2 from '../../assets/success-2.jpg';
import success3 from '../../assets/success-3.jpg';
import missionImage from '../../assets/vission.webp';
import bgAbout from '../../assets/bg-about.jpg';
import valueImage from '../../assets/value-image.png'
import { motion as Motion } from "framer-motion";

const AboutPage = () => {
    return (
        <>
            <section className="relative bg-cover bg-center py-20 text-center text-white" style={{ backgroundImage: `url(${bgAbout})` }}>
                <div className="bg-black/50 absolute inset-0"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold">About Kalyana Vennila</h1>
                    <p className="mt-4 text-lg">
                        Helping you find your perfect life partner with trust, tradition, and technology.
                    </p>
                </div>
            </section>

            <section className="bg-[#FFF8F2] py-10 text-center">
                <Motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-lg p-10 shadow-lg flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                        <img src={aboutImage} alt="About Us" className="w-80 h-80 object-cover rounded-lg" />
                        <div className="text-left">
                            <h2 className="text-3xl font-bold text-primary mb-4">About Us</h2>
                            <p className="text-gray-600">
                                We come from a family deeply rooted in Tamil culture and values. Our journey started in Mayiladuthurai, Tamil Nadu, and expanded to Chennai and Hyderabad.
                                At Kalyana Vennila, we believe that marriage is not just about two individuals but about two families coming together in love and harmony.
                            </p>
                            <p className="text-gray-600 mt-3">
                                Our platform is built with **trust, authenticity, and modern technology** to help people find their ideal life partners.
                            </p>
                        </div>
                    </div>
                </Motion.div>
            </section>

            <section className="bg-[#FFF8F2] py-10 text-center">
                <Motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-lg p-10 shadow-lg flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                        <img src={valueImage} alt="About Us" className="w-80 h-80 object-cover rounded-lg" />
                        <div className="text-left">
                            <h2 className="text-3xl font-bold text-primary mb-4">Our Value</h2>
                            <p className="text-gray-600">
                                My great grandfather Narayanaswamy Iyer and grandfather Ramachandran Iyer who led a very austere life,
                                always believed and stressed while we are progressing as a society and accepting scientific development,
                                we should not lose our traditional and moral values which are deep rooted in our social system.
                            </p>
                            <p className="text-gray-600 mt-3">
                                Our platform is built with **trust, authenticity, and modern technology** to help people find their ideal life partners.
                            </p>
                        </div>
                    </div>
                </Motion.div>
            </section>

            <section className="bg-[#F9F9F9] py-10 text-center">
                <Motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-lg p-10 shadow-lg flex flex-col md:flex-row-reverse items-start space-y-6 md:space-y-0 md:space-x-8">
                        <img src={missionImage} alt="Mission & Vision" className="w-80 h-80 object-cover rounded-lg" />
                        <div className="text-left">
                            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission & Vision</h2>
                            <p className="text-gray-600">
                                Our mission is to create a **safe, genuine, and user-friendly** platform for individuals seeking meaningful relationships.
                                We ensure **verified profiles, AI-based matchmaking, and privacy protection** to provide a seamless experience.
                            </p>
                            <p className="text-gray-600 mt-3">
                                Our vision is to **blend tradition with modern technology**, making the matchmaking process simple and stress-free for every user.
                            </p>
                        </div>
                    </div>
                </Motion.div>
            </section>

            <section className="bg-[#FFF8F2] py-10 text-center">
                <Motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-primary mb-6">Success Stories</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                        <Motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-300"
                        >
                            <img src={success1} alt="Happy Couple 1" className="w-full h-56 object-cover rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">"We Found Love!"</h3>
                            <p className="text-gray-600 mt-2">
                                "Thanks to Kalyana Vennila, we found each other and are happily married! The platform was easy to use."
                            </p>
                        </Motion.div>

                        <Motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-300"
                        >
                            <img src={success2} alt="Happy Couple 2" className="w-full h-56 object-cover rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">"Best Decision Ever!"</h3>
                            <p className="text-gray-600 mt-2">
                                "We connected through this platform and now we are on a beautiful journey together."
                            </p>
                        </Motion.div>

                        <Motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-300"
                        >
                            <img src={success3} alt="Happy Couple 3" className="w-full h-56 object-cover rounded-lg" />
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">"A Perfect Match!"</h3>
                            <p className="text-gray-600 mt-2">
                                "We found our soulmate on this platform. It was the best experience for us!"
                            </p>
                        </Motion.div>
                    </div>
                </Motion.div>
            </section>

            <section className="bg-[#F9F9F9] py-10 text-center">
                <Motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto px-6"
                >
                    <h2 className="text-3xl font-bold text-primary py-3">Find Your Life Partner with Us!</h2>
                    <p className="my-4 text-lg text-gray-700">
                        Join the most **trusted matchmaking platform** and start your journey today.
                    </p>
                    <p className="my-2 pb-7 text-md text-gray-600">
                        With thousands of success stories, we help you find a match based on **values, compatibility, and trust**.
                    </p>
                    <button className="button-styles">
                        Register Now
                    </button>
                </Motion.div>
            </section>

            <section className="bg-[#FDF6F0] py-10 text-center">
                <Motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto px-6"
                >
                    <h2 className="text-3xl font-bold text-primary mb-6">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 shadow-lg cursor-pointer rounded-lg transition-all"
                        >
                            <span className="text-4xl text-primary">📋</span>
                            <h3 className="text-xl font-bold text-primary my-4">1. Create Your Profile</h3>
                            <p className="text-gray-600 my-2">
                                Sign up and share details about yourself, your lifestyle, and what you're looking for in a partner.
                            </p>
                        </Motion.div>

                        <Motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 shadow-lg cursor-pointer rounded-lg transition-all"
                        >
                            <span className="text-4xl text-primary">💖</span>
                            <h3 className="text-xl font-bold text-primary my-4">2. Find Compatible Matches</h3>
                            <p className="text-gray-600 my-2">
                                Our advanced **AI-powered matching** system finds potential partners based on shared interests and values.
                            </p>
                        </Motion.div>

                        <Motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 shadow-lg cursor-pointer rounded-lg transition-all"
                        >
                            <span className="text-4xl text-primary">💬</span>
                            <h3 className="text-xl font-bold text-primary my-4">3. Connect & Communicate</h3>
                            <p className="text-gray-600 my-2">
                                Chat securely with your matches, build a connection, and take the **next step towards a happy marriage**.
                            </p>
                        </Motion.div>
                    </div>
                </Motion.div>
            </section>

            <section className="bg-[#FDF6F0] py-10">
                <Motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto px-6"
                >
                    <h2 className="text-3xl font-bold text-primary text-center mb-6">Contact Us</h2>
                    <p className="text-gray-700 text-center mb-10">
                        Have questions? Need assistance? Reach out to us, and we’ll be happy to help!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-8">
                        <div className="space-y-6 text-left">
                            <div className="flex items-center gap-4">
                                <span className="text-3xl text-primary">📞</span>
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">Phone</p>
                                    <p className="text-gray-600">+91 98765 43210</p>
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
                                    <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="label-styles">Your Name</label>
                                <input type="text" className="textbox-styles" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="label-styles">Your Email</label>
                                <input type="email" className="textbox-styles" placeholder="Enter your email" />
                            </div>
                            <div className="pb-5">
                                <label className="label-styles">Message</label>
                                <textarea className="textbox-styles" placeholder="Write your message..." rows="4"></textarea>
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

export default AboutPage;
