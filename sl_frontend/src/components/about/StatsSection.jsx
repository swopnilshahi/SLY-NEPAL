export default function StatsSection() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 text-center gap-6">

        <div>
          <h3 className="text-4xl font-bold">1000+</h3>
          <p>Happy Clients</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">10+</h3>
          <p>Years Experience</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">500+</h3>
          <p>Sessions</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">95%</h3>
          <p>Satisfaction</p>
        </div>

      </div>
    </section>
  );
}