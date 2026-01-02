"use client";

import { motion, type Variants } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

type Hobby = {
  name: string;
  icon: string;
  color: string;
};

type HobbyProps = {
  data: Hobby[];
  isLoading?: boolean;
};

/* ---------------- Animations ---------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/* ------------------------------------------- */

export const HobbyList = ({ data, isLoading }: HobbyProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-row flex-wrap justify-start items-center gap-1 sm:gap-2 min-h-hobby"
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { type: "spring", stiffness: 260, damping: 18 },
          }}
          whileTap={{ scale: 0.95 }}
          className={`
            ${isLoading && "animate-pulse"}
            bg-surface sm:text-sm text-xs inline-flex py-1 px-3 rounded-xl
            items-center relative gap-1 h-8
            dark:bg-${item.color}-100 dark:text-white
            min-w-25
          `}
        >
          <motion.img
            variants={iconVariants}
            src={urlFor(item.icon).width(20).height(20).url()}
            alt="hobby-icon"
            className="w-4"
            width={20}
            height={20}
            loading="lazy"
          />
          <span>{item.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
