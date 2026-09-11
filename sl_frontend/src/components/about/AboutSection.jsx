export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
          alt="About"
          className="rounded-3xl shadow-xl w-full"
        />

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Who We Are
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            We promote natural healing, preventive healthcare, and holistic wellness
            without dependency on drugs or surgery.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Our goal is to help people restore balance in body, mind, and spirit
            through simple and natural methods.
          </p>
        </div>

      </div>
    </section>
  );
}