"use client";

import { motion, type Variants } from "framer-motion";
import { CircleProgress } from "./CircleProgress";

interface CircleProgressGridProps {
  features: "skills" | "tools";
  data?: any[];
  isLoading: boolean;
}

/* ---------------- Animations ---------------- */

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* ------------------------------------------- */

export const CircleProgressGrid = ({
  features,
  data,
  isLoading,
}: CircleProgressGridProps) => {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-1"
    >
      {data?.map((item, index) => (
        <motion.div key={item._key ?? index} variants={itemVariants}>
          <CircleProgress
            data={item}
            isLoading={isLoading}
            features={features}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
