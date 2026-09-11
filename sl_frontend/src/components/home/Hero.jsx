import React, { useEffect, useState } from "react";
import { fetchHero } from "../../api";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchHero()
      .then((res) => {
        if (Array.isArray(res.data)) {
          setHero(res.data[0]);
        } else {
          setHero(res.data);
        }
      })
      .catch((err) => console.error("Error fetching hero:", err));
  }, []);

  if (!hero) {
    return (
      <section className="px-4 md:px-10 lg:px-40 py-10">
        <p>Loading...</p>
      </section>
    );
  }

  let imageSrc = null;

  if (hero.image === null || hero.image === undefined) {
    const url = hero.image_url;

    const match = url.match(/\/d\/(.*?)\//);
    const fileId = match ? match[1] : null;

    imageSrc = fileId
      ? `https://drive.google.com/thumbnail?id=${fileId}`
      : null;

  } else {
    imageSrc = hero.image;
  }
  return (
    <>
      <section className="px-4 md:px-10 lg:px-40 py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">

          {/* Hero Image */}
          <div
            className="w-full lg:w-1/2 aspect-video bg-cover bg-center rounded-xl shadow-lg border-4 border-white dark:border-slate-800"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />

          {/* Hero Content */}
          <div className="flex flex-col gap-6 lg:w-1/2 lg:pl-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl font-black leading-tight  text-black">
                {hero.title} |{" "}
                <span className="text-primary">{hero.subtitle}</span>
              </h1>

              {/* short description (2 lines max) */}
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 line-clamp-2">
                {hero.description}
              </p>
            </div>

            <div className="flex gap-4">
              <button className="min-w-[160px] h-12 px-6 bg-primary text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform"> 
                Start Your Journey
              </button>

              <button
                onClick={() => setShowModal(true)}
                className="min-w-[160px] h-12 px-6 bg-primary/20 text-slate-900 dark:text-slate-100 rounded-xl font-bold hover:bg-primary/30 border border-primary/50 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ POPUP MODAL */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <div className="relative w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">

      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 text-xl font-bold text-slate-500 hover:text-red-500"
      >
        ✕
      </button>

      <h2 className="mb-4 text-2xl font-bold text-primary">
        {hero.title}
      </h2>

      <h3 className="mb-2 text-lg font-semibold">
        {hero.subtitle}
      </h3>

      <p className="leading-relaxed text-slate-600 dark:text-slate-300">
        {hero.description}
      </p>
    </div>
  </div>
)}
    </>
  );
}