import React, { useEffect, useState } from "react";
import { getMethods } from "../../api";

const HealingMethods = () => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    getMethods().then((res) => {
      setMethods(res.data);
    });
  }, []);

  return (
    <div className="space-y-24 px-6 lg:px-20">

      {methods.map((method, index) => {

        const isEven = index % 2 === 0;

        return (
          <section key={method.id} className="mx-auto max-w-7xl">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* TEXT */}
              <div className={`space-y-6 ${isEven ? "order-2 lg:order-1" : "order-2"}`}>

                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    {method.icon}
                  </span>

                  <h2 className="text-3xl font-bold">
                    {method.title}
                  </h2>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300">
                  {method.description_en}
                </p>

                <p className="text-slate-600 dark:text-slate-400">
                  {method.description_np}
                </p>

                <button className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-6 py-3 font-bold hover:bg-primary transition-colors">
                  Learn More
                </button>

              </div>

              {/* IMAGE */}
              <div className={`${isEven ? "order-1 lg:order-2" : "order-1"}`}>
                <img
                  src={method.image}
                  alt={method.title}
                  className="rounded-3xl shadow-2xl w-full aspect-video object-cover"
                />
              </div>

            </div>

          </section>
        );
      })}

    </div>
  );
};

export default HealingMethods;