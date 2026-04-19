import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { fetchServices } from "../../api";

/* =========================
   3D Tilt Card Component
========================= */
function TiltCard({ service }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / rect.width - 0.5) * 100;
    const yPct = (mouseY / rect.height - 0.5) * 100;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative rounded-xl p-[1px] group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>

      {/* Card */}
      <div className="relative flex flex-col gap-4 p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl shadow-md">
        {/* Image */}
        <motion.div
          className="w-full aspect-square bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${service.image})` }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Text */}
        <div>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {service.name}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   Main Component
========================= */
export default function Methods() {
  const [services, setServices] = useState([]);
  const ref = useRef(null);

  /* Fetch Data */
  useEffect(() => {
    fetchServices()
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  /* Parallax Scroll */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative px-4 md:px-10 lg:px-40 py-20 bg-white/50 dark:bg-slate-900/30 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl absolute top-0 left-0"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl absolute bottom-0 right-0"
        />
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Our Primary Methods
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}