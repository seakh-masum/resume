interface SkeletonLineProps {
  width: number;
}

const SkeletonLine = ({ width }: SkeletonLineProps) => {
  return (
    <div
      className={`bg-surface h-4 rounded-xl animate-pulse w-[${width}px]`}
    ></div>
  );
};

export default SkeletonLine;
