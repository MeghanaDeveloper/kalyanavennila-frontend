import React, { useState } from 'react'
import { accordionData } from './privacy&policiesData';
import bgHeader from '../../../assets/bg-about.jpg'
import Accordion from '../../components/layouts/accordionLayout/accordion';

const PrivacyAndPolicy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === 0) return;
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 text-center text-white"
        style={{ backgroundImage: `url(${bgHeader})` }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">Privacy and Policies</h1>
          <p className="mt-4 text-lg">
            Learn how we protect your data and ensure secure matchmaking.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto padding-lr padding-tb cursor-pointer">
        {accordionData.map((item, index) => (
          <Accordion 
            key={index}
            index={index}
            isOpen={index === 0 || openIndex === index} 
            onToggle={handleToggle}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </>
  )
}

export default PrivacyAndPolicy;
