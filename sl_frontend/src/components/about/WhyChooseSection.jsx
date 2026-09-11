import { FaLeaf, FaLaughBeam, FaSpa, FaUserCheck } from "react-icons/fa";

const items = [
  { icon: <FaLeaf />, title: "Natural Healing Methods" },
  { icon: <FaLaughBeam />, title: "Solo Laughter Yoga" },
  { icon: <FaSpa />, title: "Stress Reduction Programs" },
  { icon: <FaUserCheck />, title: "Personalized Wellness Plans" },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              className="bg-stone-50 p-6 rounded-2xl shadow hover:-translate-y-2 transition text-center"
            >
              <div className="text-green-600 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}