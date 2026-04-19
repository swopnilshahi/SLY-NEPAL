import React, { useEffect, useState, useRef } from "react";
import { fetchConditions } from "../../api";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";

/* =========================
   Tilt Card Component
========================= */
function ConditionCard({ cond }) {
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

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      className="relative group"
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-25 blur-xl transition duration-500"></div>

      {/* Card */}
      <div className="relative flex flex-col items-center gap-3 p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-xl border border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
        
        {/* Icon */}
        <motion.span
          className="material-symbols-outlined text-4xl text-primary"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {cond.icon}
        </motion.span>

        {/* Title */}
        <p className="font-bold text-sm text-slate-900 dark:text-slate-100 text-center">
          {cond.title}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================
   Main Component
========================= */
export default function Conditions() {
  const [conditions, setConditions] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    fetchConditions()
      .then((res) => setConditions(res.data))
      .catch((err) => console.error(err));
  }, []);

  /* Scroll Parallax */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative px-4 md:px-10 lg:px-40 py-20 overflow-hidden"
    >
      {/* Floating Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="w-[450px] h-[450px] bg-primary/20 rounded-full blur-3xl absolute top-0 left-0"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl absolute bottom-0 right-0"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Conditions We Treat
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Personalized natural recovery plans for various lifestyle ailments
        </p>
      </div>

      {/* Grid with stagger animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {conditions.map((cond) => (
          <motion.div
            key={cond.id}
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
          >
            <ConditionCard cond={cond} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}