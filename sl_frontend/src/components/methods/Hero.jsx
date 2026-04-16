import React from "react";

export default function Hero() {
  return (
    <section className="relative px-6 py-16 lg:px-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl text-center relative z-10">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">Natural Wellness</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">Our Healing Methods</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Discover our four core pillars of natural therapy designed to restore your emotional, physical, and spiritual balance without drugs or surgery.
        </p>
      </div>
    </section>
  );
}