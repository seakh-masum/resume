"use client";

import { motion } from "framer-motion";

export const DownloadBtn = () => {
  return (
    <motion.a
      href="#"
      aria-label="Download Resume"
      onClick={() => window.print()}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0], // floating
      }}
      transition={{
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.12,
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      }}
      whileTap={{ scale: 0.95 }}
      className="
        grid place-content-center rounded-full fixed bottom-3 right-3 z-50
        w-12 aspect-square
        bg-gradient-to-r from-primary to-secondary
        shadow-md print:hidden cursor-pointer
      "
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000"
        whileHover={{ y: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" />
      </motion.svg>
    </motion.a>
  );
};
