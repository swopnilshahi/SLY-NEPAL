// import {
//   FaLeaf,
//   FaBullseye,
//   FaEye,
//   FaLaughBeam,
//   FaSpa,
//   FaUserCheck,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import InfoCard from "../components/methods/InfoCard";
// export default function AboutPage() {
//   return (
//     <div className="bg-stone-50 overflow-x-hidden">

//       {/* HERO */}
//       <section
//         className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
//           <span className="inline-block px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-sm">
//             Holistic Wellness & Natural Healing
//           </span>

//           <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
//             Natural Healing
//             <br />
//             Without Drugs or Surgery
//           </h1>

//           <h2 className="mt-4 text-lg sm:text-2xl text-green-300">
//             प्राकृतिक चिकित्सा द्वारा स्वस्थ जीवन
//           </h2>

//           <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg text-slate-200">
//             Experience the joy of Solo Laughter Yoga and holistic wellness in
//             Nepal. Reclaim your health through natural healing methods that
//             nurture the body, mind, and spirit.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//              <Link   to="/book">
//             <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold">
//               Book Consultation
//             </button>
//             </Link>
//             <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//             <div>
//               <img
//                 src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
//                 alt="Wellness"
//                 className="rounded-3xl shadow-2xl w-full"
//               />
//             </div>

//             <div>
//               <span className="text-green-600 font-semibold uppercase">
//                 About Us
//               </span>

//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-slate-800">
//                 Who We Are
//               </h2>

//               <p className="text-slate-600 leading-relaxed mb-5">
//                 We are dedicated to promoting natural healing and holistic
//                 wellness through preventive healthcare, Solo Laughter Yoga,
//                 stress management, and lifestyle transformation programs.
//               </p>

//               <p className="text-slate-600 leading-relaxed mb-5">
//                 Our approach focuses on supporting the body's natural ability
//                 to heal while improving physical, mental, and emotional
//                 well-being.
//               </p>

//               <p className="text-slate-600 leading-relaxed">
//                 Through education, personalized guidance, and compassionate
//                 care, we empower people to live healthier lives naturally.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* MISSION VISION */}
//       <section className="bg-white py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">

//           <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-800 mb-12">
//             Mission & Vision
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">

//             <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
//               <FaBullseye className="text-5xl text-green-600 mb-6" />
//               <h3 className="text-2xl font-bold mb-4">Mission</h3>

//               <ul className="space-y-3 text-slate-600">
//                 <li>✓ Empower individuals to achieve optimal health naturally.</li>
//                 <li>✓ Promote healthy lifestyles and wellness education.</li>
//                 <li>✓ Encourage preventive healthcare practices.</li>
//               </ul>
//             </div>

//             <div className="bg-sky-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">
//               <FaEye className="text-5xl text-sky-600 mb-6" />
//               <h3 className="text-2xl font-bold mb-4">Vision</h3>

//               <ul className="space-y-3 text-slate-600">
//                 <li>✓ Nepal's leading holistic wellness center.</li>
//                 <li>✓ Healthier communities through prevention.</li>
//                 <li>✓ Lifelong wellness transformation.</li>
//               </ul>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">

//           <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
//             Why Choose Us
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//             {[
//               {
//                 icon: <FaLeaf />,
//                 title: "Natural Healing Methods",
//               },
//               {
//                 icon: <FaLaughBeam />,
//                 title: "Solo Laughter Yoga",
//               },
//               {
//                 icon: <FaSpa />,
//                 title: "Stress Reduction Programs",
//               },
//               {
//                 icon: <FaUserCheck />,
//                 title: "Personalized Wellness Plans",
//               },
//               {
//                 icon: <FaLeaf />,
//                 title: "Experienced Practitioners",
//               },
//               {
//                 icon: <FaSpa />,
//                 title: "Holistic Mind-Body Approach",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
//               >
//                 <div className="text-4xl text-green-600 mb-5">
//                   {item.icon}
//                 </div>

//                 <h3 className="font-bold text-xl mb-3">
//                   {item.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRACTITIONER */}
//       <section className="bg-white py-16 sm:py-24">
//         <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-800 mb-12">Our Member</h2>
//          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <InfoCard/>
//             <InfoCard/>
//             <InfoCard/>
//             <InfoCard/>
//           </div>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="bg-green-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">

//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

//             <div>
//               <h3 className="text-4xl font-bold">1000+</h3>
//               <p>Happy Clients</p>
//             </div>

//             <div>
//               <h3 className="text-4xl font-bold">10+</h3>
//               <p>Years Experience</p>
//             </div>

//             <div>
//               <h3 className="text-4xl font-bold">500+</h3>
//               <p>Wellness Sessions</p>
//             </div>

//             <div>
//               <h3 className="text-4xl font-bold">95%</h3>
//               <p>Client Satisfaction</p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-green-600 to-sky-500 text-center text-white">
//         <div className="max-w-4xl mx-auto px-4">

//           <h2 className="text-3xl sm:text-5xl font-bold">
//             Start Your Natural Healing Journey Today
//           </h2>
//           <Link   to="/book">
//             <button className="mt-8 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
//             Book Your Consultation
//           </button>
//           </Link>
          

//         </div>
//       </section>

//     </div>
//   );
// }
import HeroSection from "../components/about/HeroSections";
import AboutSection from "../components/about/AboutSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import WhyChooseSection from "../components/about/WhyChooseSection";
import StatsSection from "../components/about/StatsSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import CTA from "../components/methods/CTA";
import Pactitioner from "../components/about/Pactitioner";

export default function AboutPage() {
  return (
    <>
      <HeroSection/>
      <AboutSection />
      <MissionVisionSection />
      <WhyChooseSection />
      <Pactitioner/>
      <StatsSection />
      <TestimonialsSection />
      <CTA/>
    </>
  );
}