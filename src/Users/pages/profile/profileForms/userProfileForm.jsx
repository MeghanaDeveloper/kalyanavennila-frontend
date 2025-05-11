import React from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const UserProfileForm = ({ handleChange, formData, setFormData }) => {
  const allCountries = Country.getAllCountries();

const allStates = formData?.locationDetails?.country?.code
  ? State.getStatesOfCountry(formData.locationDetails.country.code)
  : [];

const allCities = formData?.locationDetails?.state?.code
  ? City.getCitiesOfState(
      formData.locationDetails.country.code,
      formData.locationDetails.state.code
    )
  : [];

  return (
    <>
      <div className="px-4">
        <div className=" bg-white shadow-md rounded-tl-2xl rounded-tr-2xl  px-9 py-9 ">
          <form>
            <p className="text-2xl font-bold text-primary mb-4">
              Personal Information
            </p>

            <div className="pb-5">
              <label className="label-styles">SurName</label>
              <input
                type="text"
                name="surName"
                className="textbox-styles"
                value={formData.surName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">First Name</label>
              <input
                type="text"
                name="firstName"
                className="textbox-styles"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="textbox-styles"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Email</label>
              <input
                type="email"
                name="email"
                className="textbox-styles bg-gray-200 text-gray-500 cursor-not-allowed"
                value={formData.email}
                onChange={handleChange}
                required
                disabled
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="textbox-styles cursor-pointer"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Gender</label>
              <select
                name="gender"
                className="textbox-styles"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Mother Tongue</label>
              <input
                type="text"
                name="motherTongue"
                className="textbox-styles"
                value={formData.motherTongue}
                onChange={handleChange}
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">
                Known Languages (select upto 3 languages)
              </label>
              <Select
                isMulti
                name="languages"
                options={[
                  { value: "Tamil", label: "Tamil" },
                  { value: "Hindi", label: "Hindi" },
                  { value: "English", label: "English" },
                  { value: "Telugu", label: "Telugu" },
                  { value: "Malayalam", label: "Malayalam" },
                  { value: "Kannada", label: "Kannada" },
                  { value: "Marathi", label: "Marathi" },
                  { value: "Gujarati", label: "Gujarati" },
                  { value: "Bengali", label: "Bengali" },
                  { value: "Punjabi", label: "Punjabi" },
                  { value: "Urdu", label: "Urdu" },
                ]}
                className="basic-multi-select"
                classNamePrefix="select"
                value={(formData.languages || []).map((lang) => ({
                  value: lang,
                  label: lang,
                }))}
                onChange={(selectedOptions) =>
                  setFormData({
                    ...formData,
                    languages: selectedOptions
                      ? selectedOptions.map((option) => option.value)
                      : [],
                  })
                }
              />
            </div>

            <p className="text-2xl font-bold text-primary my-4">
              Community Information
            </p>

            <div className="pb-5">
              <label className="label-styles">Caste</label>
              <input
                type="text"
                name="caste"
                className="textbox-styles"
                value={formData.caste}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Sub Caste</label>
              <input
                type="text"
                name="subCaste"
                className="textbox-styles"
                value={formData.subCaste}
                onChange={handleChange}
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Religion</label>
              <input
                type="text"
                name="religion"
                className="textbox-styles"
                value={formData.religion}
                onChange={handleChange}
              />
            </div>

            <p className="text-2xl font-bold text-primary my-4">
              Communication Information
            </p>

            <div className="pb-5">
              <label className="label-styles">Mobile</label>
              <input
                type="text"
                name="mobile"
                className="textbox-styles  bg-gray-200 text-gray-500 cursor-not-allowed"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Country</label>
              <select
                name="country"
                className="textbox-styles"
                value={formData?.locationDetails?.country?.code}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {allCountries &&
                  allCountries.map((country) => {
                    return (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country?.name}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="pb-5">
        <label className="label-styles">State</label>
        <select
          name="state"
          className="textbox-styles"
          value={formData?.locationDetails?.state?.code}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {Array.isArray(allStates) && allStates.length > 0 ? (
            allStates.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state?.name}
              </option>
            ))
          ) : (
            <option disabled>No States</option> // Disable option if no states available
          )}
        </select>
      </div>

      {/* City Dropdown */}
      <div className="pb-5">
        <label className="label-styles">City</label>
        <select
          name="city"
          className="textbox-styles"
          value={formData?.locationDetails?.city?.code}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {Array.isArray(allCities) && allCities.length > 0 ? (
            allCities.map((city) => (
              <option key={city.name} value={city.name}>
                {city?.name}
              </option>
            ))
          ) : (
            <option disabled>No Cities</option> // Disable option if no cities available
          )}
        </select>
      </div>


            <p className="text-2xl font-bold text-primary my-4">
              Education / Profession details
            </p>

            <div className="pb-5">
              <label className="label-styles">Education</label>
              <select
                name="education"
                className="textbox-styles"
                value={formData.education}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Professional Degree">Professional Degree</option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="Graduation">Graduation</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Job Type</label>
              <select
                name="jobType"
                className="textbox-styles"
                value={formData.jobType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Govt">Govt</option>
                <option value="MNC">MNC</option>
                <option value="Private">Private</option>
                <option value="NRI">NRI</option>
                <option value="Business">Business</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {formData.jobType === "Others" && (
              <div className="pb-5">
                <label className="label-styles">Specify Job Type</label>
                <input
                  type="text"
                  name="otherJobType"
                  className="textbox-styles"
                  value={formData.otherJobType}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfileForm;
