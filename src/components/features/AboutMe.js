import React from "react";
import SkeletonList from "../loader/SkeletonList";
import List from "../ui/List";

export const AboutMe = ({ introduction, description, isLoading }) => {
  return (
    <>
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
    </>
  );
};
