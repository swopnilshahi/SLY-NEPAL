import React from 'react'
import {
  FaLeaf,
  FaBullseye,
  FaEye,
  FaLaughBeam,
  FaSpa,
  FaUserCheck,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const InfoCard = ({src ="",position="Founder" , name ="Shyam Bhadur" , jobDesc = "Holistic Wellness Practitioner" ,note =" Dedicated to empowering individuals through natural healing, wellness education, and preventive healthcare."} ) => {
  return (
        <div className="max-w-4xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center">
            <img
              src= {src}
              alt={position}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-green-500"
            />

            <h3 className="mt-6 text-3xl font-bold">
              {name}
            </h3>

            <p className="text-green-600 mt-2">
              {jobDesc}
            </p>

            <p className="mt-5 text-slate-600">
              {note}
            </p>

            <div className="flex justify-center gap-5 mt-8 text-2xl">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

        </div>
      
  )
}

export default InfoCard