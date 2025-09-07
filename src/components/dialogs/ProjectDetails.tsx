"use client";

import SubHeading from "../ui/SubHeading";
import ChipList from "../ui/ChipList";
import List from "../ui/List";
import DialogTitle from "../ui/DialogTitle";
import { getProjectSector, getProjectType, timestampToDate } from "@/utils";
import { Project } from "@/types/Project";

// interface ProjectDetailsProps {
//   name: string;
//   link?: string;
//   startDate: Timestamp;
//   endDate?: Timestamp;
//   description: string;
//   usedSkills?: string[];
//   sector: number;
//   type: number;
//   role: string;
//   tasks?: string[];
//   members?: string[];
// }

const ProjectDetails = ({
  name,
  link,
  startDate,
  endDate,
  description,
  usedSkills,
  sector,
  type,
  role,
  tasks,
  members,
}: Project) => {
  return (
    <div className="flex flex-col gap-7">
      <section>
        <DialogTitle title={name} link={link ?? ""} />
        <p className="dark:text-neutral-400 text-neutral-600">
          {timestampToDate(startDate)} -{" "}
          <span>{endDate ? timestampToDate(endDate) : "Present"}</span>
        </p>
      </section>
      <section>
        <SubHeading title="Description" />
        <p className="text-sm text-black/90 dark:text-white mt-2 font-medium">
          {description}
        </p>
      </section>

      {usedSkills && usedSkills?.length > 0 && (
        <section>
          <SubHeading title="Skills" />
          <ChipList data={usedSkills} />
        </section>
      )}

      <div className="flex flex-row items-start gap-3">
        <div className="basis-1/2">
          <SubHeading title="Sector" />
          <ChipList data={[getProjectSector(sector)]} />
        </div>

        <div className="basis-1/2">
          <SubHeading title="Project Type" />
          <ChipList data={[getProjectType(type)]} />
        </div>
      </div>

      <section>
        <SubHeading title="Role" />
        <p className="text-sm text-black/90 dark:text-white mt-2">{role}</p>
      </section>

      {tasks && tasks?.length > 0 && (
        <section>
          <SubHeading title="Key Feature(s)" />
          <List data={tasks} />
        </section>
      )}

      {members && members?.length > 0 && (
        <section>
          <SubHeading title="Team Mates" />
          <ChipList data={members} />
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;
