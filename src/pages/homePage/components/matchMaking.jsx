import React from 'react'
import bgImage from '../../../assets/bg-image.png'
import register from '../../../assets/register-icon.png'
import password from '../../../assets/unlock-password-icon.png'
import login from '../../../assets/login.jpg'
import build from '../../../assets/build-icon.png'
import findMatch from '../../../assets/find-match-icon.png'
import connect from '../../../assets/connect-icon.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion as Motion } from "framer-motion";


const MatchMaking = () => {
    return (
        <section className="bg-cover bg-center py-12 px-6"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h2 className="text-5xl md:text-[65px] font-bold text-center font-italian text-primary mb-5">
                Find Your Special person here
            </h2>

            <div className="text-center mb-12">
                <h2 className="text-lg md:text-3xl font-bold text-primary mb-6">
                    We take registrations for Kannada, <p className='block'>Tamil & Telugu Hindus</p> across globally
                </h2>
                <p className="text-md text-gray-500 font-semibold">
                    "Register now for free"
                </p>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-6 ">
                {[{ img: register, title: "Register", desc: "Now for free" },
                  { img: password, title: "Unlock Password", desc: "Get access to profiles" },
                  { img: login, title: "Login", desc: "Your ideal profile" },
                  { img: build, title: "Build", desc: "Your ideal profile" },
                  { img: findMatch, title: "Find", desc: "Your match" },
                  { img: connect, title: "Connect", desc: "25 brides/grooms Rs.1001/-" }].map((step, index) => (
                    <React.Fragment key={index}>
                        <Motion.div 
                            className="flex flex-col items-center text-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={step.img} alt={step.title} 
                                 className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-full border-4 border-[#FF6F00] cursor-pointer" />
                            <h3 className="font-extrabold text-2xl text-primary m-2">{step.title}</h3>
                            <p className="text-gray-500 text-[12px]">{step.desc}</p>
                        </Motion.div>
                        {index < 5 && (
                            <div className="flex items-center h-full">
                                <FaArrowRightLong className="hidden md:block text-2xl md:text-4xl text-primary relative bottom-8 " />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default MatchMaking;
