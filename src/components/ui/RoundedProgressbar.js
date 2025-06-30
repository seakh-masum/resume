import Circle from "./Circle";

export const RoundedProgressbar = ({ data, isLoading, onDetails }) => {
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
            <img
              width="45px"
              height="45px"
              src={data?.icon}
              alt=""
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
