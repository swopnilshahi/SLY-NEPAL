// src/components/Conditions.jsx
import React, { useEffect, useState } from "react";
import { fetchConditions } from "../../api";

export default function Conditions() {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    fetchConditions()
      .then(res => setConditions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="px-4 md:px-10 lg:px-40 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Conditions We Treat</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Personalized natural recovery plans for various lifestyle ailments</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {conditions.map(cond => (
          <div key={cond.id} className="flex flex-col items-center gap-3 p-6 bg-primary/10 rounded-xl border border-primary/20 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary">{cond.icon}</span>
            <span className="font-bold text-sm">{cond.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}