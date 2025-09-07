import React from "react";
import SkeletonList from "../loader/SkeletonList";
import List from "../ui/List";

interface Props {
  introduction: string;
  description: string[];
  isLoading: boolean;
}

export const AboutMe = ({ introduction, description, isLoading }: Props) => {
  return (
    <div className="min-h-about-me">
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          <div className="pt-1">
            <p className="text-neutral-700 dark:text-neutral-200 text-sm">
              {introduction}
            </p>
            <List data={description} />
          </div>
        </>
      )}
    </div>
  );
};
