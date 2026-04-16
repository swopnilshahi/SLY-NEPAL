// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-4 md:px-10 lg:px-40 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-slate-900">
              <span className="material-symbols-outlined">sentiment_very_satisfied</span>
            </div>
            <h3 className="text-xl font-bold">Solo Laughter Yoga Nepal</h3>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Empowering individuals to heal naturally through laughter and ancient wellness practices. No drugs, no surgery, just pure joy and nature.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold border-b border-primary w-fit pb-1">Contact Us</h4>
          <div className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">call</span>
            <span>+977-9861720149</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">call</span>
            <span>+977-9851085458</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">location_on</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold border-b border-primary w-fit pb-1">Connect With Us</h4>
          <div className="flex gap-4">
            <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all" href="#">
              {/* Facebook Icon */}
            </a>
            <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all" href="#">
              {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
        © 2019 Solo Laughter Yoga Nepal. All rights reserved. Natural Healing & Wellness.
      </div>
    </footer>
  );
}