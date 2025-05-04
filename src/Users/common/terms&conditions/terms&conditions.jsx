import React from "react";
import bgHeader from "../../../assets/bg-about.jpg";

const TermsAndConditions = () => {
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
        <section >
          <h2 className="text-5xl font-bold text-primary text-center mb-9 font-italian">
            Terms and Conditions
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Dear User,</strong>
          </p>

          <p className="text-lg text-gray-700 mb-4">
          Welcome to Kalyanavennila Private Limited, the owner of the website www.kalyanavennila.com (referred to as "KV").
          </p>

          <p className="text-lg text-gray-700 mb-4">
          KV and its affiliates provide services under the following terms and conditions. By visiting our website or registering on the KV website, you agree to comply with the terms and conditions outlined here. Additionally, by using or visiting any current or future KV service, or any associated business of KV, you will be bound by the guidelines and terms specific to that service or business. We encourage you to review the services provided by KV before making any payments for any service.
          </p>
          <p className="text-lg text-gray-700 mb-4">
          By accessing services from KV, you confirm that you have read, understood, and agreed to these terms and conditions. This agreement governs the relationship between you and KV, as well as all transactions or services provided by, with, or in connection to KV. This agreement shall be unconditionally binding between both parties, without any reservations.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            The users availing services from KVN are deemed to have read,
            All rights, privileges, obligations, and liabilities of you and/or KV related to any transaction or service are governed by these terms. KV reserves the right to change or alter these terms and conditions at its sole discretion from time to time.
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
