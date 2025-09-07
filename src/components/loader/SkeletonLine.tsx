interface SkeletonLineProps {
  width: number;
}

const SkeletonLine = ({ width }: SkeletonLineProps) => {
  return (
    <div
      className={`bg-neutral-200 dark:bg-neutral-800 h-4 rounded-xl animate-pulse w-[${width}px]`}
    ></div>
  );
};

export default SkeletonLine;
