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

export default function MissionVisionSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">

         <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-800 mb-12">
           Mission & Vision
         </h2>

         <div className="grid md:grid-cols-2 gap-6">

           <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
             <FaBullseye className="text-5xl text-green-600 mb-6" />
             <h3 className="text-2xl font-bold mb-4">Mission</h3>

             <ul className="space-y-3 text-slate-600">
               <li>✓ Empower individuals to achieve optimal health naturally.</li>
               <li>✓ Promote healthy lifestyles and wellness education.</li>
               <li>✓ Encourage preventive healthcare practices.</li>
             </ul>
           </div>

           <div className="bg-sky-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
             <FaEye className="text-5xl text-sky-600 mb-6" />
             <h3 className="text-2xl font-bold mb-4">Vision</h3>

             <ul className="space-y-3 text-slate-600">
               <li>✓ Nepal's leading holistic wellness center.</li>
               <li>✓ Healthier communities through prevention.</li>
               <li>✓ Lifelong wellness transformation.</li>
             </ul>
           </div>

         </div>
       </div>
     </section>
  );
}