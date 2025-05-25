import React, { useState, useEffect } from 'react';
import {  motion as Motion } from 'framer-motion';
import banner1 from '../../../../assets/image1.jpg';
import banner2 from '../../../../assets/tirupati-img.jpg';
import banner3 from '../../../../assets/image3.png';
    

const images = [
    { src: banner1, text: "Find Your Perfect Match" },
    { src: banner2, text: "" },
    { src: banner3, text: "" }
];

const BannerSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className="relative w-full h-[80vh] overflow-hidden">
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

        <div className="w-full overflow-hidden bg-yellow-500 py-3">
  <div className="whitespace-nowrap animate-marquee text-xl font-bold text-black">
         <p className=' padding-lr  font-bold py-3 text-xl text-black'>Introducing soon: Kalyanavennila.com. Register for free here or write to us at services@kalyanavennila.com or call us at 83310 85410</p>
         </div>
         </div>
         </>
    );
};

export default BannerSlider;
