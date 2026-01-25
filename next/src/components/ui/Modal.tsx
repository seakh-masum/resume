"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import CloseIcon from "../icons/CloseIcon";
import { ResponsiveContext } from "@/contexts/responsive.context";

export default function Modal({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isMobile = useContext(ResponsiveContext);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // ESC key closes modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  // Handle swipe down to close (mobile)
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      router.back();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => router.back()}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={
            isMobile ? { y: 300, opacity: 0 } : { scale: 0.9, opacity: 0 }
          }
          animate={isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }}
          exit={isMobile ? { y: 300, opacity: 0 } : { scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag={isMobile ? "y" : false}
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="w-full sm:max-w-150 rounded-t-2xl sm:rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl relative"
        >
          {/* Close button (top-center mobile, top-right desktop) */}
          <button
            onClick={() => router.back()}
            className="cursor-pointer
              absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2
              sm:right-1 sm:left-auto sm:translate-x-0
              p-2 rounded-full text-gray-500 dark:text-gray-800
              z-10
            "
          >
            <CloseIcon />
          </button>

          {/* Drag handle (mobile) */}
          <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700 sm:hidden" />

          {/* Header */}
          {title && (
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center sm:text-left">
              {title}
            </h2>
          )}

          {/* Content */}
          <div className="text-sm text-gray-700 dark:text-gray-300 overflow-y-auto max-h-dialog">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
