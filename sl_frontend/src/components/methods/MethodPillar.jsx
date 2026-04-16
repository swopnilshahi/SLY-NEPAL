import React from "react";

export default function MethodPillar({ title, icon, description1, description2, image, reverse=false }) {
  return (
    <section className="mx-auto max-w-7xl">
      <div className={`grid items-center gap-12 lg:grid-cols-2 ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
        {reverse ? (
          <>
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-primary">{icon}</span>
                <h2 className="text-3xl font-bold">{title}</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{description1}</p>
                <p className="text-slate-600 dark:text-slate-400">{description2}</p>
              </div>
              <button className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-6 py-3 font-bold text-background-dark hover:bg-primary transition-colors">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video w-full overflow-hidden rounded-3xl bg-slate-200 shadow-2xl" style={{backgroundImage: `url(${image})`, backgroundSize:"cover", backgroundPosition:"center"}} />
            </div>
          </>
        ) : (
          <>
            <div className="order-1 lg:order-1">
              <div className="aspect-video w-full overflow-hidden rounded-3xl bg-slate-200 shadow-2xl" style={{backgroundImage: `url(${image})`, backgroundSize:"cover", backgroundPosition:"center"}} />
            </div>
            <div className="space-y-6 order-2 lg:order-2">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-primary">{icon}</span>
                <h2 className="text-3xl font-bold">{title}</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">{description1}</p>
                <p className="text-slate-600 dark:text-slate-400">{description2}</p>
              </div>
              <button className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-6 py-3 font-bold text-background-dark hover:bg-primary transition-colors">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}