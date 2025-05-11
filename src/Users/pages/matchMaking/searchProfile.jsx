import React, { useState } from "react";

const SearchProfile = ({ approvedProfiles, handleViewProfile }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  const applyFilters = (profile) => {
    console.log(profile);
    const fullName =
      `${profile?.surName} ${profile?.firstName} ${profile?.lastName}`.toLowerCase();
    const matchesName = fullName.includes(searchQuery.toLowerCase());

    const matchesGender = genderFilter
      ? profile?.gender === genderFilter
      : true;

    const matchesAge = ageFilter
      ? (() => {
          const [min, max] = ageFilter.split("-").map(Number);
          return profile?.myAge >= min && profile?.myAge <= max;
        })()
      : true;

    return matchesName && matchesGender && matchesAge;
  };

  const filteredProfiles = approvedProfiles?.filter(applyFilters);
  return (
    <>
      <div className="w-full bg-yellow-100 text-yellow-900 text-center padding-lr mt-6 py-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 bg-white shadow-sm rounded-lg">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="textbox-styles w-full md:w-1/3 border border-gray-300 rounded-lg px-4 py-2"
          />

          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="w-full md:w-1/4 border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Select By Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            className="w-full md:w-1/4 border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="">Select By Age</option>
            <option value="21-25">21-25</option>
            <option value="25-30">25-30</option>
            <option value="30-35">30-35</option>
            <option value="35-40">35-40</option>
            <option value="40-45">40-45</option>
            <option value="45-50">45-50</option>
            <option value="50-55">50-55</option>
            <option value="55-60">55-60</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 padding-lr  pt-10">
        {filteredProfiles && filteredProfiles.length > 0 ? (
          filteredProfiles?.map((profile) => (
            <div
              key={profile?._id}
              className="bg-white border border-gray-200 shadow-xl rounded-2xl transition duration-300 hover:shadow-2xl flex flex-col pt-6 overflow-hidden"
            >
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
                      {profile?.surName} {profile?.firstName}{" "}
                      {profile?.lastName}
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
                        : "-----"}{" "}
                      ({profile?.myAge} Years)
                    </p>
                  </div>
                  <div className="flex">
                    <p className="font-bold text-primary min-w-[120px]">
                      Gender
                    </p>
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
                    className="bg-primary text-white px-9 py-3 font-bold rounded-2xl hover:bg-amber-500 transition-effects"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-3xl font-bold mt-10">
            No approved profiles found.
          </div>
        )}
      </div>
    </>
  );
};

export default SearchProfile;
