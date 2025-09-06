import React, { useEffect, useState } from "react";
import useModal from "../../hooks/useModal";
import ProjectDetails from "../dialogs/ProjectDetails";
import SkeletonList from "../loader/SkeletonList";

export const ProjectList = () => {
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const { setDialog } = useModal();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const res = await fetch("/api/projects?orderBy=startDate");
    const { data } = await res.json();

    setProjects(data);
    setLoading(false);
  };

  const viewProjectDetails = (e, data) => {
    setDialog(<ProjectDetails data={data} />);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          <ul className="pl-5 grid gap-3 sm:grid-cols-2 grid-cols-1">
            {projects.map((item, index) => (
              <li
                key={index}
                className="bg-neutral-100 list-none py-3 px-4 rounded-lg mb-0 dark:bg-neutral-800"
                onClick={(e) => viewProjectDetails(e, item)}
              >
                <b className="text-neutral-800 text-base dark:text-neutral-100">
                  {item?.name}
                </b>
                <p className="text-neutral-500 text-xs dark:text-neutral-300">
                  {item?.description}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
