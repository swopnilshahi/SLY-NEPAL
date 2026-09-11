const testimonials = [
  {
    text: "Laughter Yoga changed my life completely.",
    name: "Client A",
  },
  {
    text: "Best natural healing experience in Nepal.",
    name: "Client B",
  },
  {
    text: "Very peaceful and effective wellness sessions.",
    name: "Client C",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <p>"{t.text}"</p>
              <h4 className="mt-4 font-semibold">— {t.name}</h4>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}