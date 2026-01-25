"use client";

import React, { ReactNode, useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
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
    <div className="bg-surface/50 inset-0 fixed z-100 grid place-content-center">
      <div
        className={`max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:rounded-t-2xl z-50 overflow-hidden min-w-96`}
      >
        <div className="flex flex-row sm:justify-end justify-center py-3">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="bg-surface backdrop-blur supports-backdrop-blur:bg-surface/95 cursor-pointer h-auto shadow-xl p-5 sm:rounded-theme rounded-t-2xl overflow-y-auto max-h-dialog transition duration-500 ease-in-out sm:w-dialog w-full max-sm:pb-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
