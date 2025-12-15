import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

type Hobby = {
  name: string;
  icon: string;
  color: string;
};

type HobbyProps = {
  data: Hobby[];
  isLoading?: boolean;
};

export const HobbyList = ({ data, isLoading }: HobbyProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-start items-center gap-1 sm:gap-2 min-h-hobby">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${
            isLoading && "animate-pulse"
          } bg-surface sm:text-sm text-xs inline-flex py-1 px-3 rounded-xl items-center relative gap-1 h-8 dark:bg-${
            item.color
          }-100 dark:text-white min-w-[100px]`}
        >
          {/* {typeof item.icon === "string" && ( */}
          <img
            src={urlFor(item.icon).width(20).height(20).url()}
            alt="hobby-icon"
            className="w-4"
            width={20}
            height={20}
            loading="lazy"
          />
          {/* )} */}
          {item.name}
        </div>
      ))}
    </div>
  );
};
