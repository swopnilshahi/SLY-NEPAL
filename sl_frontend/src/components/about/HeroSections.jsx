import { useEffect, useState } from "react";
import { getAboutData } from "../../api";
import {Link} from "react-router-dom"

const defaultHero = {
  title: "Natural Healing Without Drugs or Surgery",
  subtitle: "प्राकृतिक चिकित्सा द्वारा स्वस्थ जीवन",
  description:
    "Experience the joy of Solo Laughter Yoga and holistic wellness in Nepal. Reclaim your health through natural healing methods that nurture the body, mind, and spirit.",
  image:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=80",
};

export default function HeroSection() {
  const [data, setData] = useState(defaultHero);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAboutData();

        if (res?.hero) {
          setData(res.hero);
        } else {
          setData(defaultHero);
        }
      } catch (error) {
        console.log("API error, using default data:", error);
        setData(defaultHero);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center text-white text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 p-6 w-full max-w-5xl mx-auto">

        {/* Loading indicator (optional but nice UX) */}
        {loading && (
          <div className="mb-4 text-sm text-green-300 animate-pulse">
            Loading content...
          </div>
        )}

        {/* Badge */}
        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6">
          Holistic Wellness & Natural Healing
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {data.title}
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-lg md:text-2xl text-green-300">
          {data.subtitle}
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-slate-200">
          {data.description}
        </p>

        {/* Buttons */}
        
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to ="/book">
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition">
            Book Consultation
          </button>
        </Link>
          <button  onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              });
            }}   className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20">
              Learn More
            </button>
        </div>
      </div>
    </section>
  );
}