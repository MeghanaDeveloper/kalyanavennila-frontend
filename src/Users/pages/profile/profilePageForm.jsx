import React from 'react'
import Select from "react-select";
import { FaSpinner } from "react-icons/fa";

const ProfilePageForm = ({handleChange, handleSubmit, formData, loading, setFormData }) => {
  return (
    <>
              <form className="px-5 py-3" onSubmit={handleSubmit}>
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
              <label className="label-styles">Religion</label>
              <input
                type="text"
                name="religion"
                className="textbox-styles"
                value={formData.religion}
                onChange={handleChange}
              />
            </div>

            {/* Dropdown Fields */}
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

            <p className="text-primary font-bold text-2xl py-5">
              My Partner Preferences :
            </p>

            <div className="pb-5">
              <label className="label-styles">Looking For</label>
              <select
                name="lookingFor"
                className="textbox-styles"
                value={formData.lookingFor}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Bride">Bride</option>
                <option value="Groom">Groom</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Partner Age</label>
              <select
                name="partnerAge"
                className="textbox-styles"
                value={formData.partnerAge}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="21-25">21-25</option>
                <option value="25-30">25-30</option>
                <option value="30-35">30-35</option>
                <option value="35-40">35-40</option>
                <option value="40-45">40-45</option>
                <option value="45-50">45-50</option>
                <option value="50-55">50-55</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Religion</label>
              <input
                type="text"
                name="partnerReligion"
                className="textbox-styles"
                value={formData.partnerReligion}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Caste</label>
              <input
                type="text"
                name="partnerCaste"
                className="textbox-styles"
                value={formData.partnerCaste}
                onChange={handleChange}
                required
              />
            </div>

            <div className="pb-5">
              <label className="label-styles">Mother Tongue</label>
              <input
                type="text"
                name="partnerMotherTongue"
                className="textbox-styles"
                value={formData.partnerMotherTongue}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-4">
              <button
                type="submit"
                className="button-styles"
                disabled={loading}
              >
                {loading ? <FaSpinner className="animate-spin" /> : "Update"}
              </button>
            </div>
          </form>
    </>
  )
}

export default ProfilePageForm