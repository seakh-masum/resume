"use client";

import SubHeading from "../ui/SubHeading";
import ChipList from "../ui/ChipList";
import List from "../ui/List";
import DialogTitle from "../ui/DialogTitle";
import { getProjectSector, getProjectType, timestampToDate } from "@/utils";
import { Project } from "@/types/Project";

interface Props {
  data: Project;
}

const ProjectDetails = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <section>
        <DialogTitle title={data?.title} link={data?.link ?? ""} />
        <p className="text-text-light">
          {data?.startDate} -{" "}
          <span>{data?.endDate ? data?.endDate : "Present"}</span>
        </p>
      </section>
      <section>
        <SubHeading title="Description" />
        <p className="text-sm mt-2 font-medium">{data?.description}</p>
      </section>

      {data?.techStacks && data?.techStacks?.length > 0 && (
        <section>
          <SubHeading title="Skills" />
          <ChipList data={data?.techStacks} />
        </section>
      )}

      <div className="flex flex-row items-start gap-3">
        <div className="basis-1/2">
          <SubHeading title="Sector" />
          <ChipList data={[data?.sector]} />
        </div>

        <div className="basis-1/2">
          <SubHeading title="Project Type" />
          <ChipList data={[data?.type]} />
        </div>
      </div>

      <section>
        <SubHeading title="Role" />
        <p className="text-sm mt-2">{data.role}</p>
      </section>

      {data?.responsibilities && data?.responsibilities?.length > 0 && (
        <section>
          <SubHeading title="Responsibilities" />
          <List data={data?.responsibilities} />
        </section>
      )}

      {data?.achievements && data?.achievements?.length > 0 && (
        <section>
          <SubHeading title="Achievements" />
          <List data={data?.achievements} />
        </section>
      )}

      {data?.members && data?.members?.length > 0 && (
        <section>
          <SubHeading title="Team Mates" />
          <ChipList data={data?.members} />
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;
