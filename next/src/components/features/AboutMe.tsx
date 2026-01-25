import React from "react";
import SkeletonList from "../loader/SkeletonList";
import List from "../ui/List";

interface Props {
  introduction: string;
  summary: string[];
  isLoading: boolean;
}

export const AboutMe = ({ introduction, summary, isLoading }: Props) => {
  return (
    <div className="min-h-about-me">
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          <div className="pt-1">
            <p className="text-text text-sm">{introduction}</p>
            <List data={summary} />
          </div>
        </>
      )}
    </div>
  );
};
