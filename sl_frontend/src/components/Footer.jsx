
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-4 md:px-10 lg:px-40 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-slate-900">
              <span className="material-symbols-outlined">
                sentiment_very_satisfied
              </span>
            </div>

            <h3 className="text-xl font-bold">
              Solo Laughter Yoga Nepal
            </h3>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            Empowering individuals to heal naturally through laughter and
            ancient wellness practices. No drugs, no surgery, just pure joy
            and nature.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold border-b border-primary w-fit pb-1">
            Contact Us
          </h4>

          <a
            href="tel:+9779861720149"
            className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">call</span>
            <span>+977-9861720149</span>
          </a>

          <a
            href="tel:+9779851085458"
            className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">call</span>
            <span>+977-9851085458</span>
          </a>

          <a
            href="mailto:sololaughteryoganepal@gmail.com"
            className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">mail</span>
            <span>sololaughteryoganepal@gmail.com</span>
          </a>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="material-symbols-outlined">location_on</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold border-b border-primary w-fit pb-1">
            Connect With Us
          </h4>

          <div className="flex gap-4 flex-wrap">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/sololaughteryoga"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@SololaughteryogaNepal"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sololaughteryoga"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@sololaughteryoga"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
        © 2019 Solo Laughter Yoga Nepal. All rights reserved.
        Natural Healing & Wellness.
      </div>
    </footer>
  );
}