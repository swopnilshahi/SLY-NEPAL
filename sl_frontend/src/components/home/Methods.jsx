// src/components/Methods.jsx
import React, { useEffect, useState } from "react";
import { fetchServices } from "../../api";

export default function Methods() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices()
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (console.log("hell0"),

    <section className="px-4 md:px-10 lg:px-40 py-12 bg-white/50 dark:bg-slate-900/30">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Our Primary Methods</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <div key={service.id} className="flex flex-col gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-full aspect-square bg-cover bg-center rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                 style={{ backgroundImage: `url(${service.image})` }} />
            <div>
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{service.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{service.description}</p>
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
}