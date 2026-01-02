"use client";

import { motion, type Variants } from "framer-motion";

interface ListProps {
  data: string[];
}

/* ---------------- Animations ---------------- */

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

/* ------------------------------------------- */

const List = ({ data }: ListProps) => {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-2 mt-2 ml-6"
    >
      {data?.map((item, idx) => (
        <motion.li
          key={idx}
          variants={itemVariants}
          className="text-text-light text-sm list-disc"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default List;
