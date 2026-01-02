import React from "react";
import OpenTabIcon from "../icons/OpenTabIcon";

type Props = {
  title: string;
  link: string;
};

const DialogTitle = ({ title, link }: Props) => {
  return (
    <span className="flex flex-row gap-2 items-center">
      <h1 className="text-3xl text-text">{title}</h1>
      <a href={link} target="_blank" rel="noreferrer">
        <OpenTabIcon />
      </a>
    </span>
  );
};

export default DialogTitle;
