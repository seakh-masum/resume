import React from "react";
import SkeletonLine from "../loader/SkeletonLine";
import Circle from "../ui/Circle";
import { ContactList } from "./Contact";
import { GradientText } from "../ui/GradientText";

export const Profile = ({ name, role, image, isLoading, isMobile }) => {
  return (
    <div
      className={`${
        isLoading && "animate-pulse"
      } p-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl mb-5 dark:from-sky-700 dark:to-indigo-700`}
    >
      <div className="pb-3">
        <div className="background flex flex-col items-start justify-center pt-20">
          <div className="relative mt-8 ml-20">
            <svg height="250" width="250" className="relative">
              <Circle
                size="lg"
                className="w-full h-full fill-none stroke-transparent"
              />
              <Circle
                size="lg"
                hasStroke
                className="stroke-purple-400 w-full h-full fill-none dark:stroke-blue-400"
                strokeDashoffset={`calc(625px - (685px * 50) / 100)`}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {isLoading ? (
                <div className="rounded-full w-52 h-52 bg-neutral-700"></div>
              ) : (
                <img
                  src={image}
                  alt=""
                  className="rounded-full w-52 h-52"
                  style={{ maxWidth: 208 + "px" }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="profile bg-neutral-100 -mt-24 mx-1 -mb-2 rounded-2xl dark:bg-neutral-950">
          <div className="flex flex-col items-center sm:items-end justify-center pt-8 pr-0 sm:pr-20 mb-14 gap-1 sm:gap-3">
            {isLoading ? (
              <>
                <SkeletonLine width={`4/5`} />
                <SkeletonLine width={`3/5`} />
              </>
            ) : (
              <>
                <GradientText
                  text={name}
                  fromColor={`oklch(54.6% 0.245 262.881)`}
                  toColor={`oklch(54.6% 0.245 262.881)`}
                  viaColor={`oklch(62.7% 0.265 303.9)`}
                  isMobile={isMobile}
                />

                <i className="text-neutral-500 text-lg sm:text-2xl ">{role}</i>
              </>
            )}
          </div>
          <ContactList />
        </div>
      </div>
    </div>
  );
};
