import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function TiltCardBase({
  children,
  className = "",
  perspective = 1000,
  scale = 1.05,
  glow = true,
}) {
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
        transformPerspective: perspective,
      }}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`relative group ${className}`}
    >
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />
      )}

      {children}
    </motion.div>
  );
}