import React from "react";

export const Card = (props) => {
  return (
    <div className="bg-neutral-50 rounded-2xl shadow-lg p-4 relative text-black/90 block mb-4 dark:bg-neutral-900 dark:text-white">
      {props.header && (
        <h1 className="text-2xl font-mono font-semibold pt-0 pb-4 px-2 dark:text-white">
          {props.header}
        </h1>
      )}
      {props.children}
    </div>
  );
};
