import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const InfoCard = ({
  src = "",
  position = "Founder",
  name = "Shyam Bahadur",
  jobDesc = "Holistic Wellness Practitioner",
  note = "Dedicated to empowering individuals through natural healing, wellness education, and preventive healthcare.",
}) => {
  return (
    <div className="w-full aspect-square sm:aspect-auto">
      
      <div className="h-full bg-white rounded-2xl shadow-lg p-5 sm:p-8 text-center flex flex-col items-center justify-center">

        {/* Image */}
        <img
          src={src}
          alt={position}
          className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-4 border-green-500 object-cover"
        />

        {/* Name */}
        <h3 className="mt-4 text-lg sm:text-2xl font-bold text-slate-800">
          {name}
        </h3>

        {/* Job */}
        <p className="text-green-600 mt-1 text-xs sm:text-base">
          {jobDesc}
        </p>

        {/* Note (3 line clamp) */}
        <p className="mt-3 text-slate-600 text-xs sm:text-base px-2 line-clamp-3">
          {note}
        </p>

        {/* Socials */}
        <div className="flex justify-center gap-4 mt-5 text-xl text-slate-700">
          <FaFacebook className="hover:text-blue-600 transition cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 transition cursor-pointer" />
        </div>

      </div>
    </div>
  );
};

export default InfoCard;