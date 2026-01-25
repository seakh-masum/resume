"use client";

import { motion, type Variants } from "framer-motion";

interface CardProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export const Card = ({ header, children, className = "" }: CardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{
        y: -4,
        scale: 1.01,
        transition: { type: "spring", stiffness: 280, damping: 20 },
      }}
      whileTap={{ scale: 0.985 }}
      className={`
        bg-accent block rounded-xl p-4 relative text-text mb-4
        shadow-theme print:shadow-none
        ${className}
      `}
    >
      {header && (
        <motion.h1
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-2xl font-mono font-semibold pt-0 pb-4 dark:text-white"
        >
          {header}
        </motion.h1>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
