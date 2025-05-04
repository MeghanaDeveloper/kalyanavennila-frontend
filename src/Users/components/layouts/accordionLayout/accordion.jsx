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
          isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
        }`}
      >
          {isOpen && (
        <div>
          {Array.isArray(content) ? (
            <ul className="list-disc list-inside">
              {content.map((point, i) => (
                <li key={i}  className="text-gray-800 text-lg pb-1 ">{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-800 text-lg">{content}</p>
          )}
        </div>
      )}
      </div>
    </div>
  );
};

export default Accordion;
