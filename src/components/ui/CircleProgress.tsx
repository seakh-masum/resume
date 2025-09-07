import Image from "next/image";
import Circle from "./Circle";

interface CircleProgressProps {
  data: {
    color?: string;
    value?: number;
    icon?: string;
    name?: string;
  };
  isLoading: boolean;
  onDetails: () => void;
}

export const CircleProgress = ({
  data,
  isLoading,
  onDetails,
}: CircleProgressProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-3"
      onClick={onDetails}
    >
      <div className="relative">
        <svg
          height="100"
          width="100"
          className={`relative -rotate-90 ${isLoading ? "animate-pulse" : ""}`}
        >
          <Circle
            size="sm"
            className={`stroke-neutral-200 dark:stroke-neutral-700 ${
              isLoading ? "fill-neutral-700" : "fill-none"
            }`}
          />
          <Circle
            size="sm"
            hasStroke
            className={`${
              isLoading ? "fill-neutral-700 stroke-neutral-700" : "fill-none"
            }`}
            stroke={data?.color}
            strokeDashoffset={`calc(625px - (250px * ${data?.value}) / 100)`}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {!isLoading ? (
            <Image
              height={45}
              width={45}
              src={data?.icon ?? "/placeholder.png"}
              alt="skill-icon"
              loading="lazy"
            />
          ) : (
            <div className="w-11 h-11"></div>
          )}
        </div>
      </div>
      {!isLoading && <span className="sm:text-base text-sm">{data?.name}</span>}
    </div>
  );
};
