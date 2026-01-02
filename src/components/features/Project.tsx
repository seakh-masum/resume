"use client";

import { motion, type Variants } from "framer-motion";
import SkeletonList from "../loader/SkeletonList";
import { Project } from "@/types/Project";
import { useRouter } from "next/navigation";

type ProjectProps = {
  data: Project[];
  isLoading: boolean;
};

/* ---------------- Animations ---------------- */
const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const ProjectList = ({ data, isLoading }: ProjectProps) => {
  const router = useRouter();

  if (isLoading) return <SkeletonList />;

  return (
    <motion.ul
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid gap-4 sm:grid-cols-2 grid-cols-1 pt-3"
    >
      {data.map((item, index) => (
        <motion.li
          key={item._key ?? index}
          variants={itemVariants}
          whileHover={{
            y: -6,
            scale: 1.03,
            boxShadow:
              "0 4px 15px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)",
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.97 }}
          animate={{
            rotate: [0, 1, -1, 0], // subtle oscillating tilt
          }}
          transition={
            {
              // rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }
          }
          className="bg-surface list-none py-4 px-5 rounded-xl cursor-pointer hover:bg-hover relative overflow-hidden"
          onClick={() => router.push(`/projects/${item._key}`)}
        >
          {/* Project Title with glowing underline */}
          <motion.b
            className="text-text text-base block mb-1 relative"
            initial={{ backgroundSize: "0% 2px" }}
            whileHover={{ backgroundSize: "100% 2px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              backgroundImage: "linear-gradient(90deg, #3b82f6, #0ea5e9)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom left",
            }}
          >
            {item?.title}
          </motion.b>

          <p className="text-text text-xs">{item?.description}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
};
