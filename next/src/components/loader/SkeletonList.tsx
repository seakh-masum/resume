import React from "react";
import SkeletonLine from "./SkeletonLine";

const SkeletonList = () => {
  return (
    <div className="flex flex-col justify-between h-full py-1 gap-5">
      <SkeletonLine width={72} />
      <SkeletonLine width={56} />
      <SkeletonLine width={64} />
      <SkeletonLine width={72} />
      <SkeletonLine width={56} />
    </div>
  );
};

export default SkeletonList;
