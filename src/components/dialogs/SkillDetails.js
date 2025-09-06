import React from "react";
import SubHeading from "../ui/SubHeading";
import ChipList from "../ui/ChipList";
import List from "../ui/List";
import DialogTitle from "../ui/DialogTitle";
import { getLevelName } from "@/utils/featureUtils";

const SkillDetails = ({ data }) => {
  return (
    <div className="flex flex-col gap-7">
      <section>
        <DialogTitle title={data?.name} link={data?.link} />
        <p className="text-neutral-500">{data?.description}</p>
      </section>

      <section className="flex flex-row items-start">
        {data?.value && (
          <div className="basis-1/2">
            <SubHeading title="My Level" />
            <ChipList data={[getLevelName(data?.value)]} />
          </div>
        )}

        {data?.experience && (
          <div className="basis-1/2">
            <SubHeading title="Hands on Experience" />
            <p className="text-lg text-black dark:text-white mt-2">
              {data.experience} years
            </p>
          </div>
        )}
      </section>

      {data?.features?.length > 0 && (
        <section>
          <SubHeading title="Features" subTitle="I Known" />
          <List data={data?.features} />
        </section>
      )}

      {data?.projects?.length > 0 && (
        <section>
          <SubHeading title="Projects" subTitle="Using the Skill" />
          <ChipList data={data?.projects} />
        </section>
      )}
    </div>
  );
};

export default SkillDetails;
