"use client";

import { motion, type Variants } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import Circle from "../ui/Circle";
import { ContactList } from "./Contact";
import Image from "next/image";

type Props = {
  data: any;
  isLoading: boolean;
  contacts: Array<any>;
};

/* ------------------ Variants ------------------ */

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const avatar: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
    },
  },
};

/* ---------------------------------------------- */

export const Profile = ({ data, isLoading, contacts }: Props) => {
  const CIRCUMFERENCE = 625; // your dasharray
  const MAX_PROGRESS = 685; // your existing math base

  const dashOffset = CIRCUMFERENCE - (MAX_PROGRESS * 50) / 100;
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`
        ${isLoading && "animate-pulse"}
        [grid-area:profile] p-0
        bg-linear-to-r from-primary to-secondary
        rounded-xl mb-5
      `}
    >
      <div className="pb-3">
        {/* Avatar Section */}
        <div className="background flex flex-col items-center sm:items-start justify-center pt-20">
          <motion.div variants={avatar} className="relative sm:mt-8 sm:ml-14">
            <svg height="250" width="250" className="relative">
              {/*<Circle
                color="red"
                size="lg"
                value={25}
                // className="w-full h-full fill-none stroke-transparent"
              />*/}
              <motion.g
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                {/*<Circle
                  size="lg"
                  color="red"
                  strokeDashoffset={dashOffset}
                  value={25}
                />*/}
                <Circle
                  size="lg"
                  stroke={"red"}
                  hasStroke
                  className="stroke-secondary w-full h-full fill-none"
                  initial={{ strokeDashoffset: 625 }}
                  whileInView={{ strokeDashoffset: dashOffset }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </motion.g>
            </svg>

            {/* Profile Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="rounded-full w-52 h-52 overflow-hidden"
              >
                <Image
                  src={urlFor(data.image).width(208).height(208).url()}
                  alt={data.name}
                  width={208}
                  height={208}
                  decoding="async"
                  fetchPriority="high"
                  className="rounded-full w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Name + Title */}
        <div className="profile bg-accent -mt-24 mx-1 -mb-2 rounded-[10px]">
          <motion.div
            variants={container}
            className="flex flex-col items-center sm:items-end justify-center
              pt-28 sm:pt-8 pr-0 sm:pr-14 mb-8 sm:mb-14 gap-1 sm:gap-3"
          >
            {isLoading ? (
              <>
                <div className="bg-surface rounded-xl animate-pulse w-75 h-20" />
                <div className="bg-surface rounded-xl animate-pulse w-50 h-8 mb-2" />
              </>
            ) : (
              <>
                <motion.p
                  variants={fadeUp}
                  className="font-heading text-6xl md:text-7xl text-text text-center sm:text-start"
                >
                  {data.name}
                </motion.p>

                <motion.i
                  variants={fadeUp}
                  className="text-text-light text-lg sm:text-2xl text-center sm:text-start"
                >
                  {data.title}
                </motion.i>
              </>
            )}
          </motion.div>

          {/* Contacts */}
          <motion.div variants={fadeUp}>
            <ContactList data={contacts} isLoading={isLoading} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
