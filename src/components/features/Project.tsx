import { useEffect, useState } from "react";
import ProjectDetails from "../dialogs/ProjectDetails";
import SkeletonList from "../loader/SkeletonList";
import { useDialog } from "@/hooks/useDialog";
import Dialog from "../ui/Dialog";
import { Project } from "@/types/Project";

type ProjectProps = {
  data: Project[];
  isLoading: boolean;
};
export const ProjectList = ({ data, isLoading }: ProjectProps) => {
  const { isOpen, openDialog, closeDialog, dialogData } = useDialog<Project>();

  return (
    <>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          <ul className="grid gap-3 sm:grid-cols-2 grid-cols-1 pt-3">
            {data.map((item, index) => (
              <li
                key={index}
                className="bg-surface list-none py-3 px-4 rounded-lg mb-0"
                onClick={() => openDialog({ data: item })}
              >
                <b className="text-neutral-800 text-base dark:text-neutral-100">
                  {item?.title}
                </b>
                <p className="text-neutral-600 text-xs dark:text-neutral-300">
                  {item?.description}
                </p>
              </li>
            ))}
          </ul>
          <Dialog isOpen={isOpen} onClose={closeDialog}>
            {dialogData && <ProjectDetails {...dialogData} />}
          </Dialog>
        </>
      )}
    </>
  );
};
