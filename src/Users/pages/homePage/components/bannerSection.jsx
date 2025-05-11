import React, { useState, useEffect } from 'react';
import {  motion as Motion } from 'framer-motion';
import banner1 from '../../../../assets/image1.jpg';
import banner2 from '../../../../assets/tirupati-img.jpg';
import banner3 from '../../../../assets/image3.png';

const images = [
    { src: banner1, text: "Find Your Perfect Match" },
    // { src: banner2, text: "Connecting Hearts Across the Globe" },
    // { src: banner3, text: "Start Your Journey of Love Today" }
];

const BannerSlider = () => {
    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="relative w-full h-[100vh] overflow-hidden">
                <Motion.div
                    key={index}
                    className="absolute w-full h-full flex items-center justify-center text-white text-3xl md:text-5xl font-bold bg-black/50"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ backgroundImage: `url(${images[index].src})`, backgroundSize: 'cover', backgroundPosition: 'center 15%',  filter: 'brightness(85%)' , backgroundRepeat:'no-repeat' }}
                >
                    <p className="p-6 text-center text-5xl md:text-5xl lg:text-6xl text-white font-italian shadow-3xl">{images[index].text}</p>
                </Motion.div>
        </div>
    );
};

export default BannerSlider;
