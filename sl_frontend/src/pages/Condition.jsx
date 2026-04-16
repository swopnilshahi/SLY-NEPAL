import React, { useEffect, useState } from "react";
import { fetchConditions } from "../api";

const Condition = () => {
  const [conditions, setConditions] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchConditions().then((res) => setConditions(res.data));
  }, []);

const filtered = conditions.filter((item) => {
  return (
    (item.title || "").toLowerCase().includes(search.toLowerCase()) &&
    (activeCategory === "All" || item.category === activeCategory)
  );
});
  const categories = ["All", ...new Set(conditions.map((c) => c.category))];

  return (
    <main className="mx-auto w-full max-w-[1280px] px-6 py-8 lg:px-10">
      <div className="flex flex-col gap-8 lg:flex-row">

        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-24 flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900/50">

            <h3 className="text-lg font-bold">Healing Stories</h3>

            <div className="text-sm italic text-slate-600">
              "After 10 years of migraine, I found relief."
            </div>

            <button className="border-2 border-primary py-2 rounded-xl">
              Read All
            </button>

          </div>
        </aside>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col gap-8">

          {/* HERO */}
          <section className="rounded-3xl bg-slate-900 text-white p-8">
            <h1 className="text-4xl font-extrabold">
              Conditions We Treat Naturally
            </h1>
            <p className="text-slate-300 mt-4">
              Drug-free healing for chronic conditions.
            </p>
          </section>

          {/* SEARCH */}
          <section>
            <input
              type="text"
              placeholder="Search condition..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 rounded-xl shadow"
            />
          </section>

          {/* FILTER */}
          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === cat ? "bg-primary" : "bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <section className="grid gap-6 sm:grid-cols-2">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-3xl bg-white p-6 shadow-sm hover:shadow-md"
              >
                <span className="material-symbols-outlined text-3xl text-primary">
                  {item.icon}
                </span>

                <h3 className="text-xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 mt-2">
                  {item.description}
                </p>

                <div className="mt-auto flex justify-between items-center mt-6">
                  <span className="text-xs text-primary">
                    {item.category}
                  </span>

                  <button className="text-sm font-bold">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section className="bg-primary text-center p-8 rounded-3xl">
            <h2 className="text-2xl font-bold">
              Not sure if we can help?
            </h2>

            <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl">
              Book Now
            </button>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Condition;