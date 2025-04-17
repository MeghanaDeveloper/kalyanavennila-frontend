import React from "react";
import bgHeader from "../../../assets/bg-about.jpg";

const TermsAndConditions = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center  text-center text-white"
        style={{ backgroundImage: `url(${bgHeader})` }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold"></h1>
          <p className="mt-4 text-lg">Terms And Conditions</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto padding-lr padding-tb">
        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Terms and Conditions
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Dear User,</strong>
          </p>

          <p className="text-lg text-gray-700 mb-4">
            Welcome to <strong>Kalyanavennila</strong>, owned and operated by{" "}
            <strong>Kalyanavennila Private Limited</strong>. By accessing or
            using the www.kalyanavennila.com website (hereafter referred to as
            KVN), you agree to abide by the following terms and conditions.
            These terms apply to all visitors, users, and others who access or
            use the services of KVN.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Acceptance of Terms
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            By visiting the KVN website or signing up as a member, you confirm
            your acceptance and agreement to be bound by these terms and
            conditions. Additionally, when you use or visit any current or
            future KVN service or business associated with KVN, you will also be
            subject to the applicable guidelines and terms associated with those
            services.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We encourage you to review all the services KVN offers before making
            any payments or committing to any service.
          </p>

          <p className="text-lg text-gray-700 mb-4">
            The users availing services from KVN are deemed to have read,
            understood, and accepted these terms and conditions. This agreement
            will govern the relationship between you and KVN, as well as all
            transactions or services provided by KVN. These terms are binding
            upon both parties without any reservations.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            KVN reserves the right, at its sole discretion, to update, change,
            or modify these terms and conditions from time to time. Any changes
            will be reflected on this page. Continued use of KVN’s services
            after any changes or updates signifies your acceptance of those
            changes.
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
