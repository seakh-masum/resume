import Image from "next/image";
import React, { useEffect, useState } from "react";
import SkeletonLine from "../loader/SkeletonLine";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  data: Array<any>;
  isLoading: boolean;
};

export const ContactList = ({ data, isLoading }: Props) => {
  return (
    <div className="p-6 pt-2 flex flex-col sm:flex-row gap-3 justify-evenly">
      {data.map((item: any, index: number) => (
        <a
          href={item?.url}
          key={index}
          className="flex flex-row gap-2 items-center"
        >
          {isLoading ? (
            <>
              <div className="rounded-full w-12 h-12 bg-surface"></div>
              <div
                className={`bg-surface h-10 rounded-xl animate-pulse w-full sm:w-32`}
              ></div>
            </>
          ) : (
            <>
              <div className="bg-secondary rounded-full p-3">
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ width: 24 + "px", height: 24 + "px" }}
                  loading="lazy"
                  src={urlFor(item?.image).width(24).height(24).url()}
                  alt="contact-icon"
                />
              </div>
              <p className="leading-[48px] text-lg dark:text-neutral-300">
                {item?.value}
              </p>
            </>
          )}
        </a>
      ))}
    </div>
  );
};
