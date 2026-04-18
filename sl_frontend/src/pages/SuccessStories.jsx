import React, { useEffect, useState } from "react";
import { getSuccessStories } from "../api";

import axios from "axios";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getSuccessStories().then(res => setStories(res.data));
  }, []);

  return (
     <main className="flex-1">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-10">
        <div className="@container">
          <div
            className="relative flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center overflow-hidden"
            data-alt="People practicing outdoor yoga in peaceful mountain setting"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnQ1lxnimfXKi450l7woy-2W8vcNQl7q9W5IcQ_s94UZYc_7jGkL_etRVTIqyDRlhotzHGqDmlqGSDQomTwIzVRkh6_dRGIeymkp_KFBsO1PyEIdIjN0UeHxNgKJ3bW_HWNWpCMuv0gu945qnTsOzcjkVs0Nozxydf4zFX6QABN0lJquFY-2-6RKGjZ6NPz-2DHAaXi8sJKaCOLjl5-y9l7QC8l9NDEuOGC53oM_mqcPFODp_c4b_QYT0ejf_atoyxCgMcYpS1UwA")',
            }}
          >
            <div className="max-w-3xl flex flex-col gap-4">
              <span className="bg-primary/20 backdrop-blur-sm text-primary px-4 py-1 rounded-full text-xs font-bold self-center uppercase tracking-widest border border-primary/30">
                Transformation Stories
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Real People, Real Healing
              </h1>
              <p className="text-slate-100 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Discover how drug-free and surgery-free natural therapies are
                transforming lives across Nepal, one smile at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="px-6 md:px-20 mb-8">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto no-scrollbar">
          <div className="flex gap-10 whitespace-nowrap">
            {[
              "All Stories",
              "Diabetes Recovery",
              "Mental Health & Depression",
              "Paralysis & Mobility",
              "Hypertension",
            ].map((item, i) => (
              <a
                key={i}
                className={`pb-4 text-sm font-semibold transition-colors ${
                  i === 0
                    ? "relative flex flex-col items-center justify-center text-primary font-bold"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
                href="#"
              >
                <span>{item}</span>
                {i === 0 && (
                  <div className="absolute bottom-0 w-full h-1 bg-primary rounded-t-full"></div>
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center text-slate-400 gap-2">
            <span className="material-symbols-outlined text-sm">
              filter_list
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              Filter By Condition
            </span>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="px-6 md:px-20 py-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>

                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={story.image}
                  alt={story.title}
                />

                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-slate-900 text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                    {story.tag}
                  </span>
                </div>

                <button className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur size-10 rounded-full flex items-center justify-center text-slate-900 shadow-lg">
                  <span className="material-symbols-outlined">play_arrow</span>
                </button>
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {story.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  "{story.story}"
                </p>

                <div className="mt-4 flex items-center gap-3 py-3 border-t border-slate-50 dark:border-slate-800">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      {story.therapyIcon}
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Therapy Used
                    </p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {story.therapy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-20 bg-primary/10 dark:bg-primary/5 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="size-16 rounded-2xl bg-primary flex items-center justify-center text-slate-900 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-3xl">
              add_reaction
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
            Has your life been transformed?
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            Your journey could be the beacon of hope someone else needs today.
            Share your recovery story and inspire a drug-free Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex min-w-[200px] items-center justify-center rounded-xl h-14 px-8 bg-primary text-slate-900 text-base font-bold tracking-wide hover:scale-105 transition-all">
              Share Your Journey
            </button>

            <button className="flex min-w-[200px] items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold tracking-wide border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all">
              Contact a Healer
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuccessStories;

