import React from "react";
import { FaSpinner } from "react-icons/fa";

const PartnerPreferencesForm = ({
  handleChange,
  handleSubmit,
  formData,
  loading,
}) => {
  return (
    <>
      <div className="px-4">
        <div className=" bg-white shadow-md rounded-t-2xl px-9 py-6 ">
          <form>
            <p className="text-primary font-bold text-2xl pb-8">
              My Partner Preferences :
            </p>

            <div className="pb-5">
              <label className="label-styles">Looking For</label>
              <select
                name="lookingFor"
                className="textbox-styles"
                value={formData?.partnerPreferences?.lookingFor}
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
                value={formData?.partnerPreferences?.partnerAge}
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
                <option value="50-55">55-60</option>
              </select>
            </div>

            <div className="pb-5">
              <label className="label-styles">Religion</label>
              <input
                type="text"
                name="partnerReligion"
                className="textbox-styles"
                value={formData?.partnerPreferences?.partnerReligion}
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
                value={formData?.partnerPreferences?.partnerCaste}
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
                value={formData?.partnerPreferences?.partnerMotherTongue}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-6">
              <button
                type="submit"
                className="button-styles"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? <FaSpinner className="animate-spin" /> : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartnerPreferencesForm;
