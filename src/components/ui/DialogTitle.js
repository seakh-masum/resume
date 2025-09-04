import React from "react";
import OpenTabIcon from "../icons/OpenTabIcon";

const DialogTitle = ({ title, link }) => {
  return (
    <span className="flex flex-row gap-2 items-center">
      <h1 className="text-3xl text-black/90 dark:text-white/90">{title}</h1>
      <a href={link} target="_blank" rel="noreferrer">
        <OpenTabIcon />
      </a>
    </span>
  );
};

export default DialogTitle;
