"use client";

import SubHeading from "../ui/SubHeading";
import ChipList from "../ui/ChipList";
import List from "../ui/List";
import DialogTitle from "../ui/DialogTitle";
import { getLevelName } from "@/utils/featureUtils";
import { Skill } from "@/types/Skill";

interface Props {
  data: Skill;
  feature: "tools" | "skills";
}

export default function SkillDetails({ data, feature }: Props) {
  return (
    <div className="flex flex-col gap-7">
      <section>
        <DialogTitle title={data?.name ?? ""} link={data?.link ?? ""} />
        <p className="text-text-light">{data?.description}</p>
      </section>

      <section className="flex flex-row items-start">
        {data?.level && (
          <div className="basis-1/2">
            <SubHeading title="My Level" />
            <ChipList data={[getLevelName(data?.level)]} />
          </div>
        )}

        {data?.experience && (
          <div className="basis-1/2">
            <SubHeading title="Hands on Experience" />
            <p className="text-lg mt-2">
              <b>{data?.experience}</b> years
            </p>
          </div>
        )}
      </section>

      {data.features && data?.features?.length > 0 && (
        <section>
          <SubHeading title="Features" subTitle="I Known" />
          <List data={data?.features} />
        </section>
      )}

      {data.projects && data?.projects?.length > 0 && (
        <section>
          <SubHeading title="Projects" subTitle={`Using the ${feature}`} />
          <ChipList data={data?.projects} />
        </section>
      )}
    </div>
  );
}
