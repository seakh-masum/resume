import Circle from "../ui/Circle";
import { ContactList } from "./Contact";
import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  isLoading: boolean;
};

export const Profile = ({ name, role, image, isLoading }: Props) => {
  return (
    <div
      className={`${
        isLoading && "animate-pulse"
      } p-0 bg-gradient-to-r from-primary to-secondary rounded-xl mb-5`}
    >
      <div className="pb-3">
        <div className="background flex flex-col items-center sm:items-start justify-center pt-20">
          <div className="relative sm:mt-8 sm:ml-14">
            <svg height="250" width="250" className="relative">
              <Circle
                size="lg"
                className="w-full h-full fill-none stroke-transparent"
              />
              <Circle
                size="lg"
                hasStroke
                className="stroke-secondary w-full h-full fill-none"
                strokeDashoffset={`calc(625px - (685px * 50) / 100)`}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {isLoading ? (
                <div className="rounded-full w-52 h-52 bg-neutral-700"></div>
              ) : (
                <Image
                  src={image}
                  alt=""
                  className="rounded-full w-52 h-52"
                  style={{ maxWidth: 208 + "px" }}
                  priority
                  width={208}
                  height={208}
                  fetchPriority="high"
                />
              )}
            </div>
          </div>
        </div>
        <div className="profile bg-accent -mt-24 mx-1 -mb-2 rounded-[10px]">
          <div className="flex flex-col items-center sm:items-end justify-center pt-28 sm:pt-8 pr-0 sm:pr-14 mb-8 sm:mb-14 gap-1 sm:gap-3">
            {isLoading ? (
              <>
                <div
                  className={`bg-surface rounded-xl animate-pulse w-[300px] h-20`}
                ></div>
                <div
                  className={`bg-surface rounded-xl animate-pulse w-[200px] h-8 mb-2`}
                ></div>
              </>
            ) : (
              <>
                <p className="font-heading text-6xl md:text-7xl text-text text-right">
                  {name}
                </p>
                <i className="text-text-light text-lg sm:text-2xl ">{role}</i>
              </>
            )}
          </div>
          <ContactList />
        </div>
      </div>
    </div>
  );
};
