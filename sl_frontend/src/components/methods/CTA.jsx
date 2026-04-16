import React from "react";

export default function CTA() {
  return (
    <section className="mx-6 mb-24 lg:mx-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-background-dark p-12 text-center text-white relative">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">Ready to start your natural healing journey?</h2>
        <p className="mx-auto max-w-xl text-slate-300 mb-10">
          Join our community in Kathmandu or attend our global online workshops. Let's rediscover your natural rhythm together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-primary px-8 py-4 font-bold text-background-dark shadow-xl hover:scale-105 transition-transform">
            Join a Workshop
          </button>
          <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white hover:bg-white/20 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}