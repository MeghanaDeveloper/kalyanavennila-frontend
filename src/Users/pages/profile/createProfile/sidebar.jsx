import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const steps = useMemo(
    () => [
      { label: "Personal Information", path: "/create-profile" },
      { label: "Upload Profile", path: "/create-profile/upload-profile-image" },
      { label: "Upload Documents", path: "/create-profile/upload-documents" },
    ],
    []
  );

  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const progress = useSelector((state) => state?.authReducer?.profileProgress);
  const userProfile = useSelector((state) => state?.authReducer?.userData);

  useEffect(() => {
    const matchedStep = steps.findIndex(
      (step) => location.pathname === step.path
    );
    const fallbackStep = steps.findIndex((step) =>
      location.pathname.startsWith(step.path)
    );
    setCurrentStep(
      matchedStep !== -1
        ? matchedStep + 1
        : fallbackStep !== -1
        ? fallbackStep + 1
        : 1
    );
  }, [location.pathname, steps]);

  useEffect(() => {
    if (progress === 100 && userProfile?.isProfileStatus === "Pending") {
      setShowModal(true);
    }
  }, [progress, userProfile?.isProfileStatus]);

  return (
    <>
      {/* Responsive Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 sticky top-0 md:top-19 self-start p-4 md:pt-6 md:px-9 flex flex-col md:flex-col md:min-h-screen shadow-md z-10">
        
        {/* Progress Bar (Visible on All Devices) */}
        <div className="w-full mb-4">
          <p className="pb-2 font-bold text-lg text-primary">Profile Status:</p>
          <div className="flex items-center gap-2">
            <div className="bg-gray-200 rounded-full h-3 flex-1">
              <div
                className="bg-green-500 h-3 rounded"
                style={{ width: `${progress || 0}%` }}
              ></div>
            </div>
            <span className="text-sm font-bold text-primary whitespace-nowrap">
              {progress}%
            </span>
          </div>
          <div className="py-3 text-sm md:text-lg font-semibold text-gray-400">
            Step {currentStep} of {steps.length}
          </div>
        </div>

        {/* Horizontal on mobile, vertical on desktop */}
        <ul className="flex flex-row md:flex-col md:space-y-4 w-full justify-around md:justify-start">
          {steps.map((link) => (
            <li key={link.path} className="flex-1 md:flex-initial">
              <Link
                to={link.path}
                className={`block text-center md:text-left px-3 py-2 rounded-lg font-bold text-sm md:text-base ${
                  location.pathname === link.path
                    ? "bg-primary text-white"
                    : "hover:bg-amber-100 text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Completion Modal */}
      {showModal &&
        progress === 100 &&
        userProfile?.isProfileStatus === "Pending" && (
          <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 shadow-2xl">
            <div className="bg-white border-4 border-primary bg-opacity-30 rounded-lg p-9 min-h-[55vh] max-h-[90vh] min-w-[35vw] max-w-[75vw] md:max-w-[45vw] overflow-y-scroll scrollbar-hide">
              <h3 className="text-3xl md:text-5xl font-italian py-4 font-bold text-primary text-center">
                🎉 Profile Completion Successful!
              </h3>
              <p className="mt-4 font-bold">
                Your profile has been successfully submitted for approval. We
                will review your details and send you an email regarding your
                approval status.
                <span className="block py-4">
                  Once approved, you will be able to subscribe and explore
                  matching profiles.
                </span>
                <span>
                  Please check your inbox, for the approval process may take
                  some time depending on the profile details provided.
                </span>
              </p>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-amber-500 transition-effects cursor-pointer"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Sidebar;
