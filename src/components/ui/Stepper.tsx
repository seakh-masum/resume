"use client";

import { motion, type Variants } from "framer-motion";

type StepperProps = {
  isMobile: boolean;
  index: number;
  stepperIndex: string;
  hasLine?: boolean;
  link: string;
  heading: string;
  extraHeading?: string;
  subHeading?: string;
  desc?: string;
  list?: string[];
};

/* ---------------- Animations ---------------- */

const rowVariants: Variants = {
  hidden: (isMobile: boolean) => ({
    opacity: 0,
    x: isMobile ? 0 : -40,
    y: isMobile ? 20 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stepVariants: Variants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ------------------------------------------- */

export const Stepper = ({
  isMobile,
  index,
  stepperIndex,
  hasLine,
  link,
  heading,
  extraHeading,
  subHeading,
  desc,
  list,
}: StepperProps) => {
  return (
    <motion.div
      className="flex mb-2"
      variants={rowVariants}
      custom={isMobile}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Left stepper */}
      <div className="items-center pr-6 flex flex-col">
        <motion.div
          variants={stepVariants}
          className={`stepper stepper-item text-black flex w-full text-xs bg-primary mb-1 h-9 aspect-square relative rounded-full items-center justify-center sm:aspect-third_one sm:rounded-none leading-8 ${
            !isMobile ? `min-w-35` : ""
          }`}
          whileHover={{
            scale: 1.2,
            boxShadow: "0 0 10px #3b82f6, 0 0 20px #3b82f6",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isMobile ? index + 1 : stepperIndex}
        </motion.div>

        {hasLine && (
          <motion.div
            variants={lineVariants}
            className="w-0.5 bg-primary h-full sm:w-1 origin-top"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          />
        )}
      </div>

      {/* Right content */}
      <motion.div
        variants={contentVariants}
        className="-mt-1 mx-0 mb-4"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <p className="mb-5 leading-4 text-base md:text-lg font-medium text-text">
          {heading}
          {extraHeading && (
            <>
              {" "}
              |{" "}
              <a
                href={link ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-bold"
              >
                {extraHeading}
              </a>
            </>
          )}
        </p>

        <p className="text-sm mb-3 mt-2 leading-none text-text-light">
          {subHeading}
        </p>

        {desc && (
          <b className="text-md text-text mb-4 leading-3 font-extrabold block">
            {desc}
          </b>
        )}

        {!isMobile && list && list.length > 0 && (
          <ul className="pl-8 space-y-2">
            {list.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.25 }}
                viewport={{ once: true }}
                className="list-disc text-text"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
};
