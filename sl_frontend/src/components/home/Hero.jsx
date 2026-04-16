import React from "react";

export default function Hero() {
  return (
    <section className="px-4 md:px-10 lg:px-40 py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        <div
          className="w-full lg:w-1/2 aspect-video bg-cover bg-center rounded-xl shadow-lg border-4 border-white dark:border-slate-800"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwPu9O4HGezIVyXMJtntpz6ssRJz3r7sfsVhoh0reHnWbXpc9DHpTjqfehE6AVDoi07aX5QmqYmIMkeKfaloyL3s_tW9vG54hz-F3FcBm3f2eR9ynmH4Vhu7nwh9MASLgKwtq37E9GKIblXcG0IQJV6eJDIWQMq5Z8k8MtnaxngrUkJVRLufNymNbYTDAPdvyzivKvc_FEivKYd-cupvRi5t1SbeS1vZ46VhSCFcQy3kNb-hckMxtnVEMHmKtwB1rPvIEmkiDfpQ8")` }}
          alt="People practicing joyful outdoor laughter yoga in Nepal"
        />
        <div className="flex flex-col gap-6 lg:w-1/2 lg:pl-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              Natural Healing Without Drugs or Surgery | <span className="text-primary">प्राकृतिक चिकित्सा</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
              Experience the joy of Solo Laughter Yoga and holistic wellness in Nepal. Reclaim your health through natural therapy, meditation, and ancient healing techniques.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="min-w-[160px] h-12 px-6 bg-primary text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform">
              Start Your Journey
            </button>
            <button className="min-w-[160px] h-12 px-6 bg-primary/20 text-slate-900 dark:text-slate-100 rounded-xl font-bold hover:bg-primary/30 border border-primary/50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}