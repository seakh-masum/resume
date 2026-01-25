import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  data: Array<any>;
  isLoading: boolean;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const ContactList = ({ data, isLoading }: Props) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="p-6 pt-2 flex flex-col sm:flex-row gap-3 justify-evenly"
    >
      {data.map((item: any, index: number) => (
        <motion.a
          key={index}
          href={item?.url}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-row gap-2 items-center"
        >
          {isLoading ? (
            <>
              <div className="rounded-full w-12 h-12 bg-surface animate-pulse" />
              <div className="bg-surface h-10 rounded-xl w-full sm:w-32 animate-pulse" />
            </>
          ) : (
            <>
              <div className="bg-secondary rounded-full p-3">
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  loading="lazy"
                  src={urlFor(item?.image).width(24).height(24).url()}
                  alt="contact-icon"
                />
              </div>
              <p className="leading-12 text-lg dark:text-text">{item?.value}</p>
            </>
          )}
        </motion.a>
      ))}
    </motion.div>
  );
};
