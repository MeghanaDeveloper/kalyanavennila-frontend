import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserFullDetails } from "../../services/profileAPI's";
//import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const ProfileCards = () => {
  const allUserProfile = useSelector(
    (state) => state?.authReducer?.allUserDetails
  );

  const approvedProfiles = allUserProfile?.filter(
    (profile) => profile?.isProfileStatus === "Approved"
  );

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  //const navigate = useNavigate()

  useEffect(() => {
    const fetchUserDetails = async () => {
      await getAllUserFullDetails(dispatch);
    };

    fetchUserDetails();
  }, [dispatch]);

  const handleViewProfile = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 ">
        {approvedProfiles?.map((profile) => (
          <div
            key={profile?._id}
            className="bg-white shadow-md rounded-2xl hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="p-6 flex items-center justify-center flex-col grow flex-1">
              <div className="w-44 h-44 mx-auto">
                <img
                  src={profile?.profilePic || "/default-profile.png"}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl border-2 border-primary"
                />
              </div>
              <div className="space-y-3 text-lg">
                <div className="flex pt-6">
                  <p className="font-bold text-primary min-w-[120px]">
                    Full Name
                  </p>
                  <p>
                    <span className="pr-4">:</span>
                    {profile?.surName} {profile?.firstName} {profile?.lastName}
                  </p>
                </div>
                <div className="flex">
                  <p className="font-bold text-primary min-w-[120px]">
                    Date of Birth
                  </p>
                  <p>
                    <span className="pr-4">:</span>
                    {profile?.dateOfBirth
                      ? new Date(profile?.dateOfBirth).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }
                        )
                      : "-----"}
                  </p>
                </div>
                <div className="flex">
                  <p className="font-bold text-primary min-w-[120px]">Gender</p>
                  <p>
                    <span className="pr-4">:</span>{" "}
                    {profile?.gender ? profile?.gender : "-----"}
                  </p>
                </div>
                <div className="flex pb-6">
                  <p className="font-bold text-primary min-w-[120px]">Job</p>
                  <p>
                    <span className="pr-4">:</span>{" "}
                    {profile?.jobType ? profile?.jobType : "-----"}
                  </p>
                </div>
              </div>

              <div className="p-6 mt-auto ">
                <button
                  onClick={() => handleViewProfile(profile._id)}
                  className="bg-primary text-white px-9 py-3 font-bold rounded-full hover:bg-amber-500 transition-effects"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}

        {approvedProfiles?.length === 0 && (
          <div className="col-span-full text-center text-gray-500 text-lg mt-10">
            No approved profiles found.
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-md flex justify-center items-center z-50 shadow-3xl  ">
          <div className="bg-white bg-opacity-60 rounded-lg p-10  min-h-[50vh] max-h-[90vh] min-w-[30vw] max-w-[80vw] md:max-w-[35vw] overflow-y-scroll scrollbar-hide relative text-center border-primary border-4 ">
            <IoMdClose
              onClick={() => [setShowModal(false)]}
              className="absolute right-8  text-primary text-xl transition-effects"
            ></IoMdClose>
            <p className="text-5xl font-italian font-bold text-primary my-6">
              Subscribe to View Profiles
            </p>
            <p className="mb-6">
              To view profile contacts , please subscribe. You’ll
              get unlimited access to view profiles for 3 months.
            </p>
            <p className="mb-9">
              Subscribe now to unlock all profiles and find your perfect match!
              
            </p>
            <div className="mb-9">
              <a
                href="https://your-payment-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-9 py-3 text-lg font-bold rounded-full hover:bg-amber-500 transition-effects"
              >
                Click here to Subscribe
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCards;
