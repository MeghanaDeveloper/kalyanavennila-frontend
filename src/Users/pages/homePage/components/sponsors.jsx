import React from 'react';
import bgImage from '../../../../assets/bg-image-4.avif';
import sponsor1 from '../../../../assets/sponsor1.png';
import { motion as Motion } from "framer-motion";


const sponsors = [sponsor1, sponsor1, sponsor1, sponsor1, sponsor1];

const Sponsors = () => {
  return (
    <section
      className="padding-lr padding-tb bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-6xl font-bold text-center text-primary mb-12 font-italian">
        Our Sponsors
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
        {sponsors.map((sponsor, index) => (
          <Motion.img
            key={index}
            src={sponsor}
            alt={`Sponsor ${index + 1}`}
            className="w-24 md:w-32 rounded-full cursor-pointer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
