import { useEffect, useState } from "react";
import ProjectDetails from "../dialogs/ProjectDetails";
import SkeletonList from "../loader/SkeletonList";
import { useDialog } from "@/hooks/useDialog";
import Dialog from "../ui/Dialog";
import { Project } from "@/types/Project";

export const ProjectList = () => {
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const { isOpen, openDialog, closeDialog, dialogData } = useDialog<Project>();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const res = await fetch("/api/projects?orderBy=startDate");
    const { data } = await res.json();

    setProjects(data);
    setLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          <ul className="grid gap-3 sm:grid-cols-2 grid-cols-1 pt-3">
            {projects.map((item, index) => (
              <li
                key={index}
                className="bg-surface list-none py-3 px-4 rounded-lg mb-0"
                onClick={() => openDialog({ data: item })}
              >
                <b className="text-neutral-800 text-base dark:text-neutral-100">
                  {item?.name}
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
