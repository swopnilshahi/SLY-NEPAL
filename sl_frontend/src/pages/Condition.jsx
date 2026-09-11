import React, { useEffect, useState } from "react";
import { fetchConditions ,getSuccessStories } from "../api";
import ReusableModal from "../components/ReusableModal";
import StoriesCard from "../components/StoriesCard";
const Condition = () => {

  const [conditions, setConditions] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");


  const [stories , setStories] = useState([])
  const [visibleCount, setVisibleCount] = useState(4);

  // MODAL STATES
  const [showModal, setShowModal] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const loaderRef = React.useRef(null);
  useEffect(() => {
    fetchConditions().then((res) => setConditions(res.data));
    getSuccessStories().then((res) => setStories(res.data));
  }, []);
  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 4);
    };

    updateCount();
    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            const next = prev + 3;
            return next > stories.length ? stories.length : next;
          });
        }
      },
      { threshold: 1 }
    );

    const el = loaderRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect(); // IMPORTANT FIX
    };
  }, [stories.length]);

  //VISIBLE STORIES
  const visibleStories = stories.slice(0, visibleCount);
  
  // FILTER
  const filtered = conditions.filter((item) => {
    return (
      (item.title || "")
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (activeCategory === "All" ||
        item.category === activeCategory)
    );
  });

  const categories = [
    "All",
    ...new Set(conditions.map((c) => c.category)),
  ];

  // OPEN MODAL
  const handleOpenModal = (item) => {
    setSelectedCondition(item);
    setShowModal(true);
  };

  return (
    <>
      <main className="mx-auto w-full max-w-[1280px] px-6 py-8 lg:px-10">

        <div className="flex flex-col gap-8 lg:flex-row">

          {/* SIDEBAR */}
          <aside className="w-full lg:w-1/4 order-2 lg:order-1">

            <div className="sticky top-24 flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900/50 h-[80vh] overflow-y-auto">

              <h3 className="text-lg font-bold">
                Healing Stories
              </h3>
              <StoriesCard stories={visibleStories} />

              <div ref={loaderRef} className="h-10 flex items-center justify-center">
                {visibleCount < stories.length && (
                  <p className="text-xs text-slate-400">Loading more...</p>
                )}
              </div>

            </div>

          </aside>

          {/* CONTENT */}
          <div className="flex flex-1 flex-col gap-8 order-1 lg:order-2">

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
                    activeCategory === cat
                      ? "bg-primary"
                      : "bg-gray-200"
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

                  <div className="mt-auto flex justify-between items-center ">

                    <span className="text-xs text-primary">
                      {item.category}
                    </span>

                    {/* MODAL BUTTON */}
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="text-sm font-bold"
                    >
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

      {/* MODAL */}
      <ReusableModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={selectedCondition?.title}
        subtitle={selectedCondition?.category}
        description={selectedCondition?.description}
      >

        {selectedCondition && (
          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">
                {selectedCondition.icon}
              </span>

              <span className="font-semibold">
                Natural Healing Support
              </span>
            </div>

          </div>
        )}

      </ReusableModal>
    </>
  );
};

export default Condition;