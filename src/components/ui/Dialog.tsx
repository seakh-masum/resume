"use client";

import React, { ReactNode, useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  // const { closeModal, children } = props;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    const bind = (e: any) => {
      if (e.keyCode !== 27) {
        return;
      }

      if (
        document.activeElement &&
        ["INPUT", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }

      onClose();
    };

    document.addEventListener("keyup", bind);
    return () => document.removeEventListener("keyup", bind);
  }, [children, onClose]);

  if (!domLoaded) return null;
  if (!isOpen) return null;

  return (
    <div className="bg-black/50 inset-0 fixed z-[100] grid place-content-center dark:bg-black/50">
      <div
        className={`mobile-only:fixed mobile-only:bottom-0 mobile-only:left-0 mobile-only:right-0 mobile-only:rounded-t-2xl z-50 overflow-hidden min-w-96`}
      >
        <div className="flex flex-row sm:justify-end justify-center py-3">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="bg-white backdrop-blur supports-backdrop-blur:bg-white/95 cursor-pointer h-auto shadow-xl p-5 dark:bg-neutral-800 sm:rounded-2xl rounded-t-2xl overflow-y-auto max-h-dialog transition duration-500 ease-in-out sm:w-dialog w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
