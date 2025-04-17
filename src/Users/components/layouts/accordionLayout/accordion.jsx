import React from 'react';
import { IoIosArrowDropup } from "react-icons/io";

const Accordion = ({ title, content, isOpen, onToggle, index }) => {
  return (
    <div className="border border-primary rounded-2xl mb-4 shadow-md">
      <button
        onClick={() => onToggle(index)} 
        className="w-full flex justify-between items-center px-6 py-4 bg-white rounded-2xl hover:border-primary hover:bg-gray-50 cursor-pointer"
      >
        <span className="text-lg font-bold text-gray-800 text-left">{title}</span>
        <IoIosArrowDropup size={27}
          className={` text-primary transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-800 text-md leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
