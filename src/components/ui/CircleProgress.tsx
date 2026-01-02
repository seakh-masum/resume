"use client";

import { motion } from "framer-motion";
import Circle from "./Circle";
import { urlFor } from "@/sanity/lib/image";

interface CircleProgressProps {
  data: {
    color?: string;
    level?: number;
    icon: string;
    name?: string;
  };
  isLoading: boolean;
  onDetails: () => void;
}

export const CircleProgress = ({
  data,
  isLoading,
  onDetails,
}: CircleProgressProps) => {
  const CIRCUMFERENCE = 625; // your dasharray
  const MAX_PROGRESS = 250; // your existing math base

  const dashOffset = CIRCUMFERENCE - (MAX_PROGRESS * (data?.level ?? 0)) / 100;
  return (
    <motion.div
      className="flex flex-col items-center justify-center mb-3 cursor-pointer"
      onClick={onDetails}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={!isLoading ? { y: -4 } : undefined}
      whileTap={!isLoading ? { scale: 0.95 } : undefined}
    >
      <div className="relative">
        <svg
          height="100"
          width="100"
          className={`relative -rotate-90 ${isLoading ? "animate-pulse" : ""}`}
        >
          {/* background ring */}
          <Circle
            size="sm"
            className={`stroke-surface dark:stroke-neutral-700 fill-none`}
          />

          {/* progress ring */}
          {!isLoading && (
            <Circle
              size="sm"
              hasStroke
              stroke={data?.color}
              className="fill-none"
              initial={{ strokeDashoffset: 625 }}
              whileInView={{ strokeDashoffset: dashOffset }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          )}
        </svg>

        {/* center icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {!isLoading ? (
            <motion.img
              src={urlFor(data?.icon).width(45).height(45).url()}
              alt="skill-icon"
              height={45}
              width={45}
              loading="lazy"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.25,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
          ) : (
            <div className="w-11 h-11" />
          )}
        </div>
      </div>

      {!isLoading && (
        <motion.span
          className="sm:text-base text-sm text-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          {data?.name}
        </motion.span>
      )}
    </motion.div>
  );
};
