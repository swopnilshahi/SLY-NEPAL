import React, { useRef } from "react";
import { motion } from "framer-motion";

export function TiltCardBaseGPU({
  children,
  className = "",
  perspective = 1000,
  scale = 1.03,
  glow = true,
}) {
  const ref = useRef(null);

  const handlePointerMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    const rotateX = -yPct * 10;
    const rotateY = xPct * 10;

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--s", scale);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--s", `1`);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handleLeave}
      className={`tilt-card ${className}`}
      style={{
        perspective,
      }}
    >
      {glow && <div className="tilt-glow" />}
      {children}
    </motion.div>
  );
}