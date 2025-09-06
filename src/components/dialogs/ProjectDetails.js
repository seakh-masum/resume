"use client";

import SubHeading from "../ui/SubHeading";
import ChipList from "../ui/ChipList";
import List from "../ui/List";
import DialogTitle from "../ui/DialogTitle";
import { getProjectSector, getProjectType, timestampToDate } from "@/utils";

const ProjectDetails = ({ data }) => {
  return (
    <div className="flex flex-col gap-7">
      <section>
        <DialogTitle title={data?.name} link={data?.link} />
        <p className="text-neutral-500">
          {timestampToDate(data?.startDate)} -{" "}
          <span>
            {data.endDate ? timestampToDate(data.endDate) : "Present"}
          </span>
        </p>
      </section>
      <section>
        <SubHeading title="Description" />
        <p className="text-sm text-black/90 dark:text-white mt-2 font-medium">
          {data?.description}
        </p>
      </section>

      {data?.usedSkills?.length > 0 && (
        <section>
          <SubHeading title="Skills" />
          <ChipList data={data?.usedSkills} />
        </section>
      )}

      <div className="flex flex-row items-start gap-3">
        <div className="basis-1/2">
          <SubHeading title="Sector" />
          <ChipList data={[getProjectSector(data?.sector)]} />
        </div>

        <div className="basis-1/2">
          <SubHeading title="Project Type" />
          <ChipList data={[getProjectType(data?.type)]} />
        </div>
      </div>

      <section>
        <SubHeading title="Role" />
        <p className="text-sm text-black/90 dark:text-white mt-2">
          {data?.role}
        </p>
      </section>

      {data?.tasks?.length > 0 && (
        <section>
          <SubHeading title="Key Feature(s)" />
          <List data={data?.tasks} />
        </section>
      )}

      {data?.members?.length > 0 && (
        <section>
          <SubHeading title="Team Mates" />
          <ChipList data={data?.members} />
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;
