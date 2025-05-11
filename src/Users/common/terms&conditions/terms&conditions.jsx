import React, { useState } from "react";
import bgHeader from "../../../assets/bg-about.jpg";
import { termsAndConditionsData } from "./terms&conditionsData";
import Accordion from "../../components/layouts/accordionLayout/accordion";

const TermsAndConditions = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleToggle = (index) => {
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
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto padding-lr padding-tb cursor-pointer">
      <div className="bg-gray-50 shadow-lg rounded-2xl p-10 mb-8 ">
          <h2 className="text-5xl font-bold text-primary text-center mb-9 font-italian">
            Terms and Conditions
          </h2>

          <p className="text-lg text-gray-700 mb-4 ">
            <strong>Dear User,</strong>
          </p>

          <p className="text-lg  mb-4 text-primary ">
            Welcome to Kalyana Vennila.
            </p>

          <p className="text-lg text-gray-700 mb-4">
            Kalyana Vennila and its affiliates provide services under the
            following terms and conditions. By visiting our website or
            registering on the Kalyana Vennila website, you agree to comply with
            the terms and conditions outlined here. Additionally, by using or
            visiting any current or future Kalyana Vennila service, or any
            associated business of Kalyana Vennila, you will be bound by the
            guidelines and terms specific to that service or business. We
            encourage you to review the services provided by Kalyana Vennila
            before making any payments for any service.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            By accessing services from Kalyana Vennila, you confirm that you
            have read, understood, and agreed to these terms and conditions.
            This agreement governs the relationship between you and Kalyana
            Vennila, as well as all transactions or services provided by, with,
            or in connection to Kalyana Vennila. This agreement shall be
            unconditionally binding between both parties, without any
            reservations.
          </p>

          <p className="text-lg text-gray-700 mb-14">
            The users availing services from Kalyana VennilaN are deemed to have
            read, All rights, privileges, obligations, and liabilities of you
            and/or Kalyana Vennila related to any transaction or service are
            governed by these terms. Kalyana Vennila reserves the right to
            change or alter these terms and conditions at its sole discretion
            from time to time.
          </p>
        </div>

        {termsAndConditionsData.map((item, index) => (
          <Accordion 
            key={index}
            index={index}
            isOpen={ openIndex === index} 
            onToggle={handleToggle}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </>
  );
};

export default TermsAndConditions;
