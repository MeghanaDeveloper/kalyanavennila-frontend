import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTransgender, FaBirthdayCake, FaLanguage, FaGraduationCap, FaBuilding } from "react-icons/fa";

const EditProfileModal = ({ setIsEditProfileOpen }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "Meghana Sreee",
    email: "meghana@example.com",
    phone: "9876543210",
    location: "Hyderabad, India",
    gender: "Female",
    dob: "1993-06-15",
    language: "Telugu",
    education: "Graduation",
    job: "Government",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Updated Profile Data:", formData);
      setLoading(false);
      setIsEditProfileOpen(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 py-5">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[85%] sm:w-[47%] md:w-[42%] lg:w-[35%] xl:w-[30%] max-h-[85vh] overflow-y-scroll scrollbar-hide relative transition-all duration-300 ease-in-out">
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10">
            <FaSpinner className="text-primary animate-spin text-4xl" />
          </div>
        )}
        <IoMdClose
          onClick={() => setIsEditProfileOpen(false)}
          className={`absolute top-5 right-5 text-primary text-lg transition-effects ${loading ? "opacity-50 pointer-events-none" : ""}`}
        />
        <h2 className="text-2xl font-bold text-primary text-center py-2">Edit Profile</h2>
        <form className="px-5 py-3" onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
            <div className="pb-5" key={key}>
              <label htmlFor={key} className="label-styles capitalize">{key.replace("_", " ")}</label>
              <div className="mt-2 relative">
                <input
                  required
                  id={key}
                  name={key}
                  type={key === "dob" ? "date" : "text"}
                  className="textbox-styles"
                  value={value}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span className="absolute top-3 left-3 text-gray-600">
                  {key === "name" && <FaUser />}
                  {key === "email" && <FaEnvelope />}
                  {key === "phone" && <FaPhone />}
                  {key === "location" && <FaMapMarkerAlt />}
                  {key === "gender" && <FaTransgender />}
                  {key === "dob" && <FaBirthdayCake />}
                  {key === "language" && <FaLanguage />}
                  {key === "education" && <FaGraduationCap />}
                  {key === "job" && <FaBuilding />}
                </span>
              </div>
            </div>
          ))}
          <div className="mt-6 mb-3">
            <button
              type="submit"
              className={`button-styles flex justify-center items-center gap-2 ${loading ? "opacity-50 pointer-events-none" : ""}`}
              disabled={loading}
            >
              {loading && <FaSpinner className="animate-spin" />} Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
